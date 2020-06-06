module.exports = function transform(arr) {
    if (arr && Array.isArray(arr)) {
        let acc = [...arr];
        for (let ind = 0; ind < acc.length; ind++) {
            switch (acc[ind]) {
                case API_DISCARD_NEXT:
                    if (isInRange(acc, ind + 1)) acc[ind + 1] = SERVICE_IGNORE_ITEM;
                    break;
                case API_DISCARD_PREV:
                    if (ind) acc[ind - 1] = SERVICE_IGNORE_ITEM;
                    break;
                case API_DOUBLE_NEXT:
                    if (isInRange(acc, ind + 1)) acc[ind] = acc[ind + 1];
                    break;
                case API_DOUBLE_PREV:
                    if (ind) acc[ind] = acc[ind - 1];
                    break;
                default:
            }
        }
        return acc.filter(x => !ALL_COMMANDS.includes(x));
    }
    throw new Error('Parameter is not array');
};

const isInRange = (arr, idx) => idx >= 0 && idx <= arr.length - 1;

const API_DISCARD_NEXT = "--discard-next";
const API_DISCARD_PREV = "--discard-prev";
const API_DOUBLE_NEXT = "--double-next";
const API_DOUBLE_PREV = "--double-prev";
const SERVICE_IGNORE_ITEM = "--preparedForRemove-service-instruction";

const ALL_COMMANDS = [API_DISCARD_PREV, API_DISCARD_NEXT, API_DOUBLE_PREV, API_DOUBLE_NEXT, SERVICE_IGNORE_ITEM];
