const Arrays=[1,2,3,4,5,6,7,123,23,3,5,5,5,24124214,5,8,9,0,12,32,43,55,6,7,43];
let istenilen_deger=20;
const asd=[1,2,3,4,5,11,22,33,44,55,123,2,3,4,1];


Mission(Arrays,istenilen_deger);

Mission(asd,istenilen_deger);



function Mission(MyArray,istenilen_deger){
        const UpdateArray=[];
        const Update1Array=[];
        const Update2Array=[];

        var ksk = false;

        //var istenilen_deger;
        //istenilen_deger=10;
        var a=0;
        //iki sayınıntoplamı 10 olan iki sayı bizim array'imizde var mı?
        for(let key in MyArray){

            if(MyArray[key]<istenilen_deger && MyArray[key]>0){
                    
                    
                    //console.log(MyArray[key]);
                    //MyArray.splice(key,1);
                    UpdateArray.push(MyArray[key]);
                }
                /*switch(key){
                case (MyArray[key]>=10 || MyArray[key]<=0):
                    MyArray.pop[key];
                    console.log(MyArray[key]);
                    break;
                case (key/2):
                    a++;   
                    if(a>1)  {console.log(a);break;}
                    break;

                default:
                console.log(MyArray);    
                console.log(key);  
                console.log("b degeri" + b);  
                console.log("a degeri" + a);  

            }*/
        }
        for(let key in UpdateArray){
            //console.log(UpdateArray[key]/2);
            if((UpdateArray[key]) == (istenilen_deger/2)) {
                a++;
                //console.log("asd");
                }
            if(a>=2){console.log(`2 veya 2'den faxla ${istenilen_deger/2} degeri oldugundan kosulları saglar.`); 
            ksk = true;
            break;}

        // }

        // for(let key in UpdateArray){
            if(UpdateArray[key]<istenilen_deger/2){
                    Update1Array.push(UpdateArray[key]);
        }
            else if(UpdateArray[key]>istenilen_deger/2){
                Update2Array.push(UpdateArray[key]);       
        }
        }

        for(let key1 in Update1Array){
            for(let key2 in Update2Array){
                if((Update1Array[key1]+Update2Array[key2]) == istenilen_deger)
                {console.log(`Array'imizde bulunan ${Update1Array[key1]}+${Update2Array[key2]} sayılarının toplamı: ${istenilen_deger} oldugundan kosulları saglar.`)
                ksk = true;
            }
            }
        }

        console.log("Gelen Tüm Sayılar: "+ MyArray);

        console.log("Degerimizi saglabilecek olan sayılar :"+UpdateArray);

        console.log(Update1Array);
        console.log(Update2Array);
        alert(ksk);
        console.log(ksk);
        
}