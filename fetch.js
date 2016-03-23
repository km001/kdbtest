var ksa=require("ksana-simple-api");

ksa.fetch({db:"test",q:"不可",uti:"smallBookTest.xml@67734"},function(err,res){
    console.log("structure of return object")
    console.log(Object.keys(res[0]));
    console.log("text: text of the page");
    console.log("hits: hits in this page in relative offset");
    console.log("vpos: virtual position of this page in whole kdb");
    console.log(res[0]);
});
