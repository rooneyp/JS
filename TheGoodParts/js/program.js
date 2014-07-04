/**
 * Created by paul on 04/07/2014.
 */
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

cat.to