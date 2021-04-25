const e = React.createElement;
function callCreateElement(elementTypeName, args) {
    var copy = [].slice.call(args);
    copy.unshift(elementTypeName);
    return e.apply(null, copy);
}
function div(config, children) { return callCreateElement("div", arguments); }
function h1(config, children) { return callCreateElement("h1", arguments); }
function h2(config, children) { return callCreateElement("h2", arguments); }
function h3(config, children) { return callCreateElement("h3", arguments); }
function h4(config, children) { return callCreateElement("h4", arguments); }
function h5(config, children) { return callCreateElement("h5", arguments); }
function h6(config, children) { return callCreateElement("h6", arguments); }
function p(config, children) { return callCreateElement("p", arguments); }
function a(config, children) { return callCreateElement("a", arguments); }
function ul(config, children) { return callCreateElement("ul", arguments); }
function ol(config, children) { return callCreateElement("ol", arguments); }
function li(config, children) { return callCreateElement("li", arguments); }
function i(config, children) { return callCreateElement("i", arguments); }
function img(config, children) { return callCreateElement("img", arguments); }
function span(config, children) { return callCreateElement("span", arguments); }
function table(config, children) { return callCreateElement("table", arguments); }
function thead(config, children) { return callCreateElement("thead", arguments); }
function tbody(config, children) { return callCreateElement("tbody", arguments); }
function tr(config, children) { return callCreateElement("tr", arguments); }
function th(config, children) { return callCreateElement("th", arguments); }
function td(config, children) { return callCreateElement("td", arguments); }
function form(config, children) { return callCreateElement("form", arguments); }
function label(config, children) { return callCreateElement("label", arguments); }
function input(config, children) { return callCreateElement("input", arguments); }
function select(config, children) { return callCreateElement("select", arguments); }
function button(config, children) { return callCreateElement("button", arguments); }
