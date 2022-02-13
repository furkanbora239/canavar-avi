new Vue({
    el: "#app",
    data:{
        can: 100,
        c_can: 100,
        deneme:"bu bir deneme",
        show: true,
        ost:3,
        array:[],
        bg_color: true,
        dmg:0
    },
    methods:{
        arraypush:function(array_value){
            this.array.reverse()
            this.array.push(array_value)
            this.array.reverse()
            this.bg_color=!this.bg_color;
        },
        random:function(number){
           return Math.floor(Math.random() * number);
        },
        saldır:function(){
            var maxdmg = 11
            this.dmg = this.random(maxdmg)
            this.c_can = this.c_can - this.dmg;
            this.arraypush({id: "p" ,text:this.dmg+" vurdun"})
            this.canavar_attack()
        },
        os:function(){ //özel saldırı
            if(this.ost>0){
                var maxdmg = 21;
                this.dmg = this.random(maxdmg)
                this.c_can = this.c_can - this.dmg;
                this.ost--
                this.arraypush({id: "p" ,text:this.dmg+" vurdun."+this.ost+" hakkın kaldı"})
            }
            else {
                this.arraypush("özel güç hakkın bitti")
            }
            this.canavar_attack();
        },
        heal:function(){
            var maxheal = 11;
            this.dmg = this.random(maxheal)
            this.can = this.can + this.dmg;
            this.arraypush({id: "p" ,text:this.dmg+"hp iyleştin"})
            this.canavar_attack();
        },
        peset:function(){
            alert("canavar kazandı")
            location.reload()
        },
        canavar_attack:function(){
            var getrandom = 6
            var atc = this.random(getrandom);
            if(atc == 5){
                var maxdmg = 16
                this.dmg = this.random(maxdmg)
                this.can = this.can - this.dmg
                this.arraypush({id: "m" ,text:this.dmg+"crt hasar aldın"})
            }
            else if(atc >= 0 && atc <= 3){
                var maxdmg = 11
                this.dmg = this.random(maxdmg)
                this.can = this.can - this.dmg
                this.arraypush({id: "m" ,text:this.dmg+" hasar aldın"})
            }
            else if(atc == 4){
                var maxheal = 11
                this.dmg = this.random(maxheal)
                this.c_can = this.c_can + this.dmg
                this.arraypush({id: "m" ,text:"canavar kendine "+this.dmg+" iyleştirme uyguladı"})
            }
        },
        bgc:function(){ //background change array için
            this.bg_color = !this.bg_color
            return{
                red: this.bg_color,
                green: !this.bg_color
            }
        }
    },
    watch:{
        can:function(val){
            if(val < 0){
                this.can = 0
                alert("canavar kazandı");
                location.reload()
            }
            else if(val > 100){
                this.can=100
            }
        },
        c_can:function(val){
            if(val<0){
                this.c_can=0
                alert("tebrikler kazandın");
                location.reload()
            }
            else if(val > 100){
                this.c_can=100
            }
        }
    },
    computed:{
        ng:function(){
            this.show=!this.show
        }
    }
}) 