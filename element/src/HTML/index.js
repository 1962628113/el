var app = new Vue({
  el: "#app",
  data: {
    list: [{ //模拟ajax获取的数据
      id: 1,
      name: "iphone7",
      price: 6188,
      count: 1,
      isCheck: false
    },
      {
        id: 2,
        name: "ipad pro",
        price: 5888,
        count: 1,
        isCheck: false
      },
      {
        id: 1,
        name: "Mac",
        price: 21488,
        count: 1,
        isCheck: false
      }
    ],
    isAllCheck: false
  },
  computed: {
    totalPrice() {
      if (!this.isAllCheck) return 0  //全选取消 返回0
      //filter 它用于把Array的某些元素过滤掉，然后返回剩下的元素
      let check = this.list.filter(item => item.isCheck) //传入list 在进行判断list.isCheck true/false
      if (check.length == 0) return 0 //全部没有选中返回0
      let total = 0;
      for (var i = 0; i < check.length; i++) {
        var item = check[i];
        total += item.price * item.count; //价格*数量
      }
      return total;
    }
  },
  methods: {
    deleteto(index) {
      if (this.list[index].count == 1) {} else {
        this.list[index].count--;
      }
    },
    add(index) {
      this.list[index].count++;
    },
    remove(index) {
      this.list[index].count = 0
    },
    tab(index) {
      this.list[index].isCheck = this.list[index].isCheck ? false : true //切换是否选中
    },
    allCheck() {
      this.isAllCheck = !this.isAllCheck
      if (this.isAllCheck) {
        this.list.map(item => {
          item.isCheck = true
        })
      }
    }
  }
})
