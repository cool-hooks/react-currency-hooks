var r=function(r,t){return t in r},t=function(t,n){var e=n.from,o=n.to,i=n.base,u=n.rates;return 100*t*function(){if(e===i&&r(u,o))return u[o];if(o===i&&r(u,e))return 1/u[e];if(r(u,e)&&r(u,o))return u[o]*(1/u[e]);throw new Error("`rates` object does not contain either `from` or `to` currency!")}()/100};export{t as useCurrency};
//# sourceMappingURL=react-currency-hooks.esm.js.map
