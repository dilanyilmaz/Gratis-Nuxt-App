//uye ekleme özelliği olsaydı kodumuzu bu şekil test edebilirdik
class User{
    constructor(details){
        const{ad, soyad}=details
        this.ad=ad
        this.soyad=soyad
    }
    get adı(){
        return `${this.ad} ${this.soyad}`
    }
};

    test("tam ad döndermeli",()=>{
        const user=new User({ad:"Dilan", soyad:"Yılmaz"})
        expect(user.adı).toBe("Dilan Yılmaz")
    });

//çalışıyor