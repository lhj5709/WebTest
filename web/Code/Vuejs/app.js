new Vue({
  el:'#vue-app',
  data:{
    name:'Almaloco',
    job:'Developer',
    website:'http://www.almaloco.com',
    websiteTag:'<a href="http://www.almaloco.com">almaloco web</a>',
    age:'25',
    x:0,
    y:0,
    available:false,
    nearby:false,
    error:false,
    success:false
  },
  methods:{
    greet:function(time){
      return 'RE-HI  Good' + time + ' ' + this.name
    },
    add:function(val){
      this.age += val;
    },
    subtract:function(val){
      this.age -= val;
    },
    updateXY:function(event){
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click:function(){
      alert("click!");
    },
    logAge:function(){
      console.log('you entered your age');
    }
  },
  computed:{
    compClasses:function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
