const myTimerObj = {
    timeoutIds : [],
    setTimeout : function(fn, delay){
        const id = setTimeout(fn, delay);
        this.timeoutIds.push(id);
        return id;
    },
    clearAllTimeout : function(){
        while(this.timeoutIds.length){
          clearTimeout(this.timeoutIds.pop());
        }
    }
};
