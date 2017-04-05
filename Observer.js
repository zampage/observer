var Observer = function(){
    this.list = {};
};

Observer.prototype.subscribe = function(evt, callback){
    var evtList = this.list[evt];
    if(evtList === undefined){
        evtList = this.list[evt] = [];
    }
    evtList.push(callback);
};

Observer.prototype.trigger = function(evt, data){
    var evtList = this.list[evt];
    if(evtList !== undefined){
        evtList.forEach(function(func){
            func(data);
        });
    }
};

module.exports = new Observer();
