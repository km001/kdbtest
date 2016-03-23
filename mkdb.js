var fs=require("fs");
var indexer=require("ksana-indexer");

var lst=fs.readFileSync(process.argv[2]||"test.lst",'utf8').trim()
          .replace(/\r\n/g,"\n").split("\n");


var warning=function() {
    console.log.apply(console,arguments);
}
var do_head=function(text,tag,attributes,status) {
    console.log(text,tag)
    var level=parseInt(tag[2]);
    return [
        {path:["head_depth"], value:level }
        ,{path:["head"], value:text  }
        ,{path:["head_voff"], value: status.vpos }
    ];
}

var captureTags={
    /*"h1":do_head,
    "h2":do_head,
    "h3":do_head,
    "h4":do_head,
    "h5":do_head,
    "h6":do_head,*/
}
var onFile=function(fn) {
    console.log("indexing "+fn);
}
var config={
    name:"test"
    ,meta:{
        config:"simple1"
    }
    ,glob:lst
    ,segsep:"book.id"
    //,finalized:finalized
    ,warning:warning
    ,captureTags:captureTags
    ,callbacks: {
        onFile:onFile
    }
}
setTimeout(function(){
    indexer.build(config);
},100);

module.exports=config;
