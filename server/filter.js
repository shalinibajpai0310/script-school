module.exports = {
    topics : function( data){
                let dataToFilter = [];
                data.map( function( topic){
                    let obj = {},subTopics=[];
                    obj["menu"] = topic.menu;
                    topic.sub_menu.map( function( sub_topic){
                        if(sub_topic.hasOwnProperty("sub_menu_name")){
                            subTopics.push(sub_topic["sub_menu_name"])
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