interface Test{

   webName:string;
 
   age:number;
 
   address:string
 
 }
 
 type ant=keyof Test;
 
 let add:ant = 'webName'






 type m =  Extract<'webName'|'age'|'ww',keyof Test>
 

 type o = Record<string,{id:number,name:string}>


