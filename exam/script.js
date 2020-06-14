function template(data, tpl) {
    const f = (strings, ...values) => strings.reduce((res, item, index) => {
        return index === strings.length - 1 ? res += `${item}` : res += `${item}${data[values[index]]}`;
    }, '');
    return eval('f`' + tpl + '`');
    }