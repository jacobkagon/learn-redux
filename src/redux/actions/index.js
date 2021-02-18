export const increaseCount = (newNum) => {
    return {
        type: "INCREASE_COUNT",
        newNum: newNum
    }
}

export const decreaseCount = () => {
    return {
        type: "DECREASE_COUNT"
    }
}


