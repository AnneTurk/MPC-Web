import $ from "jquery";

var data = [
    {
        "category": "",
        "subcategories":[
            {
                "name":"",
                "items": [
                    {
                        "name":"",
                        "description":"",
                        "price":"",
                        "imagelink":"",
                        "rating": "",
                        "stock": "",
                        "category": "",
                        "subcategory": ""
                    }
                ]
            }
        ]
    }
]
$(function (){
    $("#app").ready(
        $.getJSON(
            "https://webmppcapstone.blob.core.windows.net/data/itemsdata.json",
            function(data){
                $("#category").val(data.category);
                $("#subcategories").val(data.subcatgories)
                console.log(data)
                console.log(data.category)
            }
        ) 
    )
})

