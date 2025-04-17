class AUI_Injector {

    static injectLoadInfinishute(str__html, filepath__infinishute) {
        return str__html.replace('{ dict_iii };', 
        ` 
        dict_iii.isInitialInfinishuteInjection = true;
        dict_iii.filepath__infinishute__injection = \"{ filepath__infinishute }\";

        `.replace('{ filepath__infinishute }', filepath__infinishute));
    }

}

const aui_injector = {
    AUI_Injector: AUI_Injector,
};

module.exports = aui_injector;