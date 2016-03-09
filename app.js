// 初始化 leacloud SDK 参数
AV.initialize('67n17rzfrsej9y6hd9h04qmwgiof86k8omxo4ungpnbbdc91', 'm3j0v7zt05m3cfalgkckjf65cobr9w60rgmzafe8ppv2dww8');

var Events = AV.Object.extend('Events');
var events = new Events();
var eventsQuery = new AV.Query('Events');
// app 主文件
var vm = new Vue({
	// 绑定 pid 为 events 的元素
	el: '#events',
	// app 需要的数据
	data: {
		event: { name: '', content: '', date: '' },
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
            var data = [];
            eventsQuery.find().then(function (results) {                
                for (var i = 0; i < results.length; i++) {
                    data.push(results[i].attributes)                   
                }              
                console.log('data:' + JSON.stringify(data));
            });
            this.$set('events', data);
        },
        
        // 提交条目的方法
        addEvent: function () {
            if (this.event.name) {
                events.save(this.event).then(function () {
                    console.log('event sent success')
                });
                this.events.push(this.event);
                console.log('event data saved:' + JSON.stringify(this.event));
                this.event = { name: '', content: '', date: '' };
            }
        },
        
        // 删除条目的方法
        deleteEvent: function (index) {
            console.log(this.events[index]);
            eventsQuery.equalTo('pid', this.events[index].pid)
            eventsQuery.destroyAll().then(function () {
                console.log('event delete success')
            });
            this.events.$remove(this.events[index]);
        }
	}
});