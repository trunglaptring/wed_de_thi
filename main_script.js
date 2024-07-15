const ten_tinh = ["An Giang", "Bà rịa Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh", "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", "Bình Thuận", "Cà Mau", "Cao Bằng", "Cần Thơ", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lạng Sơn", "Lào Cai", "Lâm Đồng", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "TP Hồ Chí Minh", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"];
const id_tinh = ["AG", "BV", "BL", "BK", "BG", "BN", "BT", "BD", "BĐ", "BP", "BTh", "CM", "CB", "CT", "ĐNa", "ĐL", "ĐNo", "ĐB", "ĐN", "ĐT", "GL", "HG", "HNa", "HN", "HT", "HD", "HP", "HGi", "HB", "SG", "HY", "KH", "KG", "KT", "LC", "LS", "LCa", "LĐ", "LA", "NĐ", "NA", "NB", "NT", "PT", "PY", "QB", "QNa", "QNg", "QN", "QT", "ST", "SL", "TN", "TB", "TNg", "TH", "TTH", "TG", "TV", "TQ", "VL", "VP", "YB", ]
mTab=document.getElementById("main_tab")
function openContent(evt, cityName) {
    var i, tabcontent, tabLinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function new_tab() {
    var removeMe = document.getElementsByClassName("tabLink");
    console.log(removeMe)
    if (removeMe != {}) {
        while (removeMe.length != 0) {
            removeMe[0].remove();
        }
    }
    const tabLink = document.createElement("button")
    tabLink.value = id_tinh[0];
    tabLink.innerText = ten_tinh[0];
    tabLink.classList = "tabLink"
    tabLink.id="defaultOpen"
    tabLink.onclick = function() { openContent(event, id_tinh[0]) }
    mTab.insertAdjacentElement("beforeend", tabLink)
    for (let i = 1; i < id_tinh.length; i++) {
        const tabLink = document.createElement("button")
        tabLink.value = id_tinh[i];
        tabLink.innerText = ten_tinh[i];
        tabLink.classList = "tabLink"
        tabLink.onclick = function() { openContent(event, id_tinh[i]) }
        mTab.insertAdjacentElement("beforeend", tabLink)
    }
    
    
}
new_tab()
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();