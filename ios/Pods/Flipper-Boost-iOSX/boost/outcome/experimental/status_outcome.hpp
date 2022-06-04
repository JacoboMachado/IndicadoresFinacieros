/* A less simple result type
(C) 2018-2021 Niall Douglas <http://www.nedproductions.biz/> (17 commits)
File Created: Apr 2018


Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/

#ifndef BOOST_OUTCOME_EXPERIMENTAL_STATUS_OUTCOME_HPP
#define BOOST_OUTCOME_EXPERIMENTAL_STATUS_OUTCOME_HPP

#include "../basic_outcome.hpp"

#include "../detail/trait_std_exception.hpp"
#include "status_result.hpp"

#include "boost/exception_ptr.hpp"

BOOST_OUTCOME_SYSTEM_ERROR2_NAMESPACE_BEGIN
template <class DomainType> inline std::exception_ptr basic_outcome_failure_exception_from_error(const status_code<DomainType> &sc)
{
  (void) sc;
#ifndef BOOST_NO_EXCEPTIONS
  try
  {
    sc.throw_exception();
  }
  catch(...)
  {
    return std::current_exception();
  }
#endif
  return {};
}
BOOST_OUTCOME_SYSTEM_ERROR2_NAMESPACE_END

BOOST_OUTCOME_V2_NAMESPACE_EXPORT_BEGIN

namespace experimental
{
  namespace policy
  {
    template <class T, class EC, class E>
    using default_status_outcome_policy = std::conditional_t<  //
    std::is_void<EC>::value && std::is_void<E>::value,         //
    BOOST_OUTCOME_V2_NAMESPACE::policy::terminate,                   //
    std::conditional_t<(is_status_code<EC>::value || is_errored_status_code<EC>::value) &&
                       (std::is_void<E>::value || BOOST_OUTCOME_V2_NAMESPACE::trait::is_exception_ptr_available<E>::value),  //
                       status_code_throw<T, EC, E>,                                                                    //
                       BOOST_OUTCOME_V2_NAMESPACE::policy::fail_to_compile_observers                                         //
                       >>;
  }  // namespace policy

  /*! AWAITING HUGO JSON CONVERSION TOOL
SIGNATURE NOT RECOGNISED
*/
  template <class R, class S = errored_status_code<erased<typename system_code::value_type>>, class P = std::exception_ptr,
            class NoValuePolicy = policy::default_status_outcome_policy<R, S, P>>  //
  using status_outcome = basic_outcome<R, S, P, NoValuePolicy>;

  namespace policy
  {
    template <class T, class DomainType, class E> struct status_code_throw<T, status_code<DomainType>, E> : base
    {
      using _base = base;
      template <class Impl> static constexpr void wide_value_check(Impl &&self)
      {
        if(!base::_has_value(static_cast<Impl &&>(self)))
        {
          if(base::_has_exception(static_cast<Impl &&>(self)))
          {
            BOOST_OUTCOME_V2_NAMESPACE::policy::detail::_rethrow_exception<trait::is_exception_ptr_available<E>::value>(
            base::_exception<T, status_code<DomainType>, E, status_code_throw>(static_cast<Impl &&>(self)));  // NOLINT
          }
          if(base::_has_error(static_cast<Impl &&>(self)))
          {
#ifndef BOOST_NO_EXCEPTIONS
            base::_error(static_cast<Impl &&>(self)).throw_exception();
#else
            BOOST_OUTCOME_THROW_EXCEPTION("wide value check failed");
#endif
          }
        }
      }
      template <class Impl> static constexpr void wide_error_check(Impl &&self) { _base::narrow_error_check(static_cast<Impl &&>(self)); }
      template <class Impl> static constexpr void wide_exception_check(Impl &&self) { _base::narrow_exception_check(static_cast<Impl &&>(self)); }
    };
    template <class T, class DomainType, class E>
    struct status_code_throw<T, errored_status_code<DomainType>, E> : status_code_throw<T, status_code<DomainType>, E>
    {
      status_code_throw() = default;
      using status_code_throw<T, status_code<DomainType>, E>::status_code_throw;
    };
  }  // namespace policy

}  // namespace experimental

BOOST_OUTCOME_V2_NAMESPACE_END

#endif
