(function () {

    $('.clockpicker').clockpicker();

    var basketVM = {
        items:ko.observableArray([]),
        orderInfo:{
            name:ko.observable(""),
            lastName:ko.observable(""),
            address:ko.observable(""),
            city:ko.observable("София"),
            phone:ko.observable(""),
            email:ko.observable(""),
            comment:ko.observable(""),
            promoCode:ko.observable(""),
            payment:{
                method:ko.observable("")
            },
            timePickup:ko.observable("")
        },

        remove:function (index) {
            this.items.splice(index,1);
        },
        getTotal: function () {
            return this.items().reduce((prev,curr)=>{
               return prev + (curr.count*curr.price);
            },0)
        }
    };

    basketVM.items.push({
        count:2,
        desc: {
            "Чаша":"Глина",
            "Вкус1":"Ягода",
            "Вкус2":"Лимон"
        },
        price:15
    });

    ko.applyBindings(basketVM);
})();