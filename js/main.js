var overlay = document.getElementById("overlay");
var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main-data");
//----------------------------
// toggle active class in sidebar
// var sidebar = document.getElementById("sidebar");
var sidebar_ul = document.querySelector(".sb-ul");
var sidebar_li = document.querySelectorAll(".sb-ul li");
sidebar_li.forEach((element) => {
  element.addEventListener("click", () => {
    sidebar_ul.querySelector(".active").classList.remove("active");
    element.classList.add("active");
  });
});
// ---------------------------------------------------------------------------------
// toggle sidebar
var bar_icons = document.getElementById("bars");
bar_icons.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  main.classList.toggle("active");
  overlay.classList.toggle("active");
});
if (
  sidebar.classList.contains("active") &&
  overlay.classList.contains("active")
) {
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    main.classList.remove("active");
    overlay.classList.remove("active");
  });
}
//---------------------------------------------------------------------------------------
//open drop menu for bar
var dropdown_bar = document.getElementById("dropdown-bars");
var dropdown_menu_bar = document.getElementById("dropdown-menu-bars");
dropdown_bar.addEventListener("click", () => {
  dropdown_menu_bar.classList.toggle("active");
});
//-----------------------------------------------------------------------------------
// toggle active li in  drop menu bar
var drop_ul_bars = document.querySelector(".drop-ul.bars");
var drop_li_bars = document.querySelectorAll(".drop-ul.bars li");
drop_li_bars.forEach((element) => {
  element.addEventListener("click", () => {
    drop_ul_bars.querySelector(".active").classList.remove("active");
    element.classList.add("active");
    if (element.classList.contains("active")) {
      var bar_span = document.getElementById("bar_span");
      bar_span.innerHTML = element.innerHTML;
    }
  });
});
//-----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
//bar-chart chart.js
new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["07.30", "07.31", "08.30", " 08.31", "08.32"],
    datasets: [
      {
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [410, 388, 400, 403, 395],
      },
    ],
  },
  options: {
    responsive: true,
    legend: { display: false },
    title: {
      display: true,
    },
  },
});
// -------------------------------------------------------------------------------------------------
//open drop menu for pie
var dropdown_pie = document.getElementById("dropdown-pie");
var dropdown_menu_pie = document.getElementById("dropdown-menu-pie");
dropdown_pie.addEventListener("click", () => {
  dropdown_menu_pie.classList.toggle("active");
});
//-------------------------------------------------------------------------------------------------
//pie chart
//chart.js
var data = {
  labels: ["Ads", "Rewards", "Base pay"],
  datasets: [
    {
      data: [46.3, 32.6, 21.1],
      backgroundColor: ["#1E90FF", "#FEB177", "#77D776"],
      hoverBackgroundColor: ["#1E90FF", "#FEB177", "#77D776"],
    },
  ],
};
var promisedDeliveryChart = new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
});

Chart.pluginService.register({
  beforeDraw: function (chart) {
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = "", //write text here
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
});
//----------------------------------------------------------------------------------------
// toggle active li in  drop menu Pie
var drop_ul_pie = document.querySelector(".drop-ul.pie");
var drop_li_pie = document.querySelectorAll(".drop-ul.pie li");
drop_li_pie.forEach((element) => {
  element.addEventListener("click", () => {
    drop_ul_pie.querySelector(".active").classList.remove("active");
    element.classList.add("active");
    if (element.classList.contains("active")) {
      var pie_span = document.getElementById("pie_span");
      pie_span.innerHTML = element.innerHTML;
    }
  });
});
// ------------------------------------------------------------------------------------------------
//open drop menu for table
var dropdown_table = document.getElementById("dropdown-table");
var dropdown_menu_table = document.getElementById("dropdown-menu-table");
dropdown_table.addEventListener("click", () => {
  dropdown_menu_table.classList.toggle("active");
});
// toggle active li in  drop menu table
var drop_ul_table = document.querySelector(".drop-ul.table");
var drop_li_table = document.querySelectorAll(".drop-ul.table li");
drop_li_table.forEach((element) => {
  element.addEventListener("click", () => {
    drop_ul_table.querySelector(".active").classList.remove("active");
    element.classList.add("active");
    if (element.classList.contains("active")) {
      var table_span = document.getElementById("table_span");
      table_span.innerHTML = element.innerHTML;
    }
  });
});
// ---------------------------------------------------------------------------------------------------------
