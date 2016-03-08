// app 主文件
var vm = new Vue({
	// 绑定 ID 为 events 的元素
	el: '#events',
	// app 需要的数据
	data: {
		event: { name: '', description: '', date: '' },
		events: []
	},
	// app 载入时执行
	ready: function () {
		this.fetchEvents();
	},
	// app 所需要的方法
	methods: {
        // 定义一个存取数据的方法
		fetchEvents: function () {
            var events = [
                {
                    id: 1,
                    name: '过去十年京沪房价上涨近400%',
                    description: '过去十年，股市回报不及楼市，北京、上海房价上涨380%。',
                    date: '2016-03-08'
                },
                {
                    id: 2,
                    name: '人民币中间价再回6.50水平',
                    description: '今日人民币兑美元中间价报6.5041，较上个发布日（3月7日）6.5113，调升72个基点，连涨4日，为1月4日以来最强水平。',
                    date: '2016-03-08'
                },
                {
                    id: 3,
                    name: '中国2月出口创近7年最大降幅',
                    description: '中国2月出口大跌远超预期，按美元计同比创2009年5月以来近七年最大降幅。',
                    date: '2016-03-08'
                }
            ];
            // 更新数据
            this.$set('events', events);
        },
        
        // 提交条目的方法
        addEvent: function () {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
            }
        },
        
        // 删除条目的方法
        deleteEvent: function (index) {
            this.events.$remove(this.events[index]);
        }
	}
});