module.exports = {
    topics : function( data){
                let dataToFilter = [];
                data.map( function( topic){
                    let obj = {},subTopics=[];
                    obj["menu"] = topic.menu;
                    topic.sub_menu.map( function( sub_topic){
                        let obj1={};
                        if(sub_topic.hasOwnProperty("sub_menu_name")){
                            obj1["sub_topic"] = sub_topic["sub_menu_name"];
                            obj1["type"] = Object.keys(sub_topic)[1];
                            subTopics.push(obj1)
                        }
                    });
                    obj["sub_menu_name"] = subTopics;
                    dataToFilter.push(obj);
                });
                 return dataToFilter;
    },
    quesAns : function( subtopic,data){
                let dataToFilter = [];
                data.map( function( topic){
                    topic.sub_menu.map( function( list){
                        if(list.hasOwnProperty(subtopic)){
                            dataToFilter = list[subtopic];
                        }
                    });
                });
                return dataToFilter;
    }
}