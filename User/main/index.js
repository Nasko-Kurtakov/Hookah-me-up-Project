(function () {
    const customerVM = {
        basket: ko.observableArray([]),
        cups:["Глина","Ананас","Ябълка","Портокал"],
        tabacs:["Лимон","Шоколад","Мента","Мохито","Портокал","Ягода"],
        predefinedChoices:[{name:"1",imgPath:"../../libs/img/taste/apples2.jpg"},{name:"2",imgPath:"../../libs/img/taste/cocos.jpg"},{name:"3",imgPath:"../../libs/img/taste/nar.jpg"},
            {name:"4",imgPath:"../../libs/img/taste/grape.jpg"},{name:"5",imgPath:"../../libs/img/taste/strawberries2.jpg"},{name:"6",imgPath:"../../libs/img/taste/susheniPlodove.jpg"},
            {name:"7",imgPath:"../../libs/img/taste/appricot.jpg"},{name:"8",imgPath:"../../libs/img/taste/fig.jpg"},{name:"9",imgPath:"../../libs/img/taste/peach2.jpg"}],
        addToBasket: function (item) {
            this.basket.push(item);
        },
        addToBasketCustomHookah:function () {
            if(this.customHookahVM.cup() && (this.customHookahVM.tabac1() || this.customHookahVM.tabac2())) {
                const item = {
                    cup:this.customHookahVM.cup(),
                    tabac1:this.customHookahVM.tabac1(),
                    tabac2:this.customHookahVM.tabac2(),
                    isAddedIce:this.customHookahVM.isAddedIce() == "true" ? true : false,
                    hosesNum:(this.customHookahVM.hosesNum()*1)
                }
                this.addToBasket(item);
            }
        },
        customHookahVM: {
            cup: ko.observable(""),
            tabac1: ko.observable(""),
            tabac2: ko.observable(""),
            isAddedIce: ko.observable(false),
            hosesNum: ko.observable(1)
        }
    };

    ko.applyBindings(customerVM);
})();