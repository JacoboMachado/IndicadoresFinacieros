const mapStateToprops = (state) => {
    return {
        indicators: state.indicatorsReducer,
    };
};

export { mapStateToprops }