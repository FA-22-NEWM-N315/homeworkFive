export function changePage(pageID) {
    // let page = pageID + "Content";
    console.log("page " + pageID);
    $.get(`pages/${pageID}.html`, function(data) {
        console.log(data);
        $("#app").html(data); 
    }).fail((error) => {
        if(error.status == "404") {
            alert("Page can not be found. Please check your url.");
        }
        console.log("error", error.status);
    });
    
}