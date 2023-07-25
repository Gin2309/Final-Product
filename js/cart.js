/* casc selector $(css selector) */
// $("#total")

// các hàm thay đổi hoặc update hoặc thêm mới nội dung trong html
//1. get nội dung
// var title = $(".title").text()
// alert(title)

//2. Thay đổi hoặc thêm mới 
// $("title").text("gio hang")
// alert(title)

//3. get nội dung bao gồm cả html con $(selector).html()
// var total_price_html = $(".total_price").html

//4. thay đổi hoặc thêm mới bao gồm cả html
// $(".total_price").html("<span>tong tien san pham:</span><span id="total"> 2.800.000đ</span>")

//set giá trị và get giá trị thuộc tính
//1. get giá trị của thuộc tính
// var url_name = $("img").attr("src")
//2. set giá trị cho thuộc tính
// $("img").attr("src", "../img//shirt66.jpg")

// set và get css
// var fontSize = $(".title").css("font-size", "35px")
//2. set giá trị cho html


/* cú pháp thực hiện các sự kiện trong jquerry
    code thực hiện khi có sự kiện */

$(".btn-cong, .btn-tru").on("click", function(){
    var type = $(this).attr("data-type");
    console.log(type)
    var parent = $(this).parent();
    var input_solg = parent.find(".input_solg");
    var solg = input_solg.val();
    if (type == "cong"){
        solg = parseInt(solg) + 1;
    }else{
        if (solg > 1){
            solg = parseInt(solg) - 1; 
        }
    }
    
    input_solg.val(solg);

    var price = input_solg.attr("data-price");
    var total_1sp = solg * price;

    //selector ra đối tượng cha bất kì parents
    var parents = $(this).parents(".action");
    parents.find(".total-1sp").text(formatPrice(total_1sp)+"đ");
    var total = totalPrice()
    $("#total").text(formatPrice(total)+ "đ")

})


$(".btn-xoa").on("click", function(){
    $(this).parents(".row").remove();
    var total = totalPrice()
    $("#total").text(formatPrice(total)+ "đ")
})

function formatPrice(total){
    return total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

function totalPrice(){
    var total = 0
    $(".solg_sp").each(function(){
        var solg = $(this).find(".input_solg").val()
        var price = $(this).find(".input_solg").attr("data-price")
        console.log(price)
        var total_1sp = solg * price
        total = total + parseInt(total_1sp)
    })
    return total
}

// hàm append và prepend để add thêm con về trong 1 html đối tượng cha