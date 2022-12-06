function rootReducer(state, action) {
    
    switch(action.type) {
        case actionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if(index === action.index) {
                        return {
                            ...item,
                            count: item.count + 1,
                        }
                    }
                    return item;
                })
            };
        case actionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if(index === action.index) {
                        return {
                            ...item,
                            count: item.count - 1,
                        }
                    }
                    return item;
                })
            };
        case actionTypes.CHECK_ITEM:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if(index === action.index) {
                        return {
                            ...item,
                            isChecked: !item.isChecked,
                        }
                    }
                    return item;
                })
            };
        case actionTypes.CKECK_ALL_ITEMS:
            return {
                ...state,
                allIsChecked: !state.allIsChecked,
                items: state.items.map((item, index) => {
                    return {
                        ...item,
                        isChecked: !state.allIsChecked,
                    }
                })
            };
        case actionTypes.CALCULATE_TOTAL:
            return {
                ...state,
                totalPrice: state.items.reduce((total, item) => {
                    return item.isChecked? total + item.price * item.count : total;
                }, 0),
                totalCount: state.items.reduce((total, item) => {
                    return item.isChecked? total + item.count : total;
                }, 0),
                oldTotalPrice: state.items.reduce((total, item) => {
                    return item.isChecked? total + item.oldPrice * item.count : total;
                }, 0),
                totalSale: state.items.reduce((total, item) => {
                    return item.isChecked? total + (item.oldPrice - item.price) * item.count : total;
                }, 0)

            };
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item, index) => {
                    return index !== action.index;
                })
            };

        case actionTypes.CHECK_PAYMENT:
            return {
                ...state,
                paymentIsChecked: !state.paymentIsChecked,
            };
        case actionTypes.CHANGE_DELIVERY_TYPE:
            return {
                ...state,
                deliveryType: action.deliveryType,
            };
        

    }
    return state;
}