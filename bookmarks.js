const bookmarksData = [
  {
    "name": "qq mail",
    "url": "https://wx.mail.qq.com/list/readtemplate?name=account_list.html",
    "tags": [
      "日常",
      "mail",
      "腾讯邮箱",
      "邮件",
      "QQ邮箱",
      "工具",
      "通讯"
    ]
  },
  {
    "name": "gmail",
    "url": "https://mail.google.com/mail/u/0/#inbox",
    "tags": [
      "日常",
      "mail",
      "谷歌邮箱",
      "Gmail",
      "邮件",
      "Google",
      "办公",
      "工具"
    ]
  },
  {
    "name": "outlook calendar",
    "url": "https://outlook.live.com/calendar/0/view/month",
    "tags": [
      "日常",
      "行程",
      "日历",
      "时间管理",
      "效率工具",
      "办公",
      "Microsoft",
      "Outlook"
    ]
  },
  {
    "name": "ToDo",
    "url": "https://to-do.live.com/tasks/today",
    "tags": [
      "日常",
      "待办事项",
      "任务管理",
      "效率",
      "工具",
      "微软"
    ]
  },
  {
    "name": "OneNote",
    "url": "https://onedrive.live.com/edit.aspx?resid=64F5982CEBA060FB!113&migratedtospo=true&wd=target%28%E5%BF%AB%E9%80%9F%E7%AC%94%E8%AE%B0.one%7Cf33bbb9b-8a40-4bb7-8700-0c5cbf3f896e%2F2022%20OKR%7C72548eb1-68ce-473d-9f30-ca608dd099f3%2F%29&wdorigin=NavigationUrl",
    "tags": [
      "日常",
      "note",
      "笔记应用",
      "OneNote",
      "OKR",
      "目标管理",
      "生产力",
      "Office"
    ]
  },
  {
    "name": "Notion",
    "url": "https://www.notion.com/",
    "tags": [
      "笔记",
      "note",
      "Notion",
      "生产力",
      "项目管理",
      "协作",
      "知识库",
      "日常"
    ]
  },
  {
    "name": "Gemini",
    "url": "https://gemini.google.com/app",
    "tags": [
      "AI",
      "LLM",
      "谷歌AI",
      "聊天机器人",
      "对话式AI",
      "生产力工具",
      "谷歌"
    ]
  },
  {
    "name": "deepseek",
    "url": "https://chat.deepseek.com/",
    "tags": [
      "AI",
      "LLM",
      "深度求索",
      "DeepSeek",
      "聊天机器人",
      "Chatbot",
      "生产力工具"
    ]
  },
  {
    "name": "chatgpt",
    "url": "https://chatgpt.com/",
    "tags": [
      "AI",
      "LLM",
      "OpenAI",
      "Chatbot",
      "NLP",
      "Productivity"
    ]
  },
  {
    "name": "poe-ds",
    "url": "https://poe.com/DeepSeek-R1",
    "tags": [
      "AI",
      "LLM",
      "Poe",
      "DeepSeek",
      "DeepSeek-R1",
      "聊天机器人",
      "推理模型"
    ]
  },
  {
    "name": "poe-chatgpt",
    "url": "https://poe.com/ChatGPT",
    "tags": [
      "AI",
      "LLM",
      "Poe聚合",
      "ChatGPT",
      "OpenAI",
      "聊天机器人"
    ]
  },
  {
    "name": "kimi",
    "url": "https://www.kimi.com/",
    "tags": [
      "AI",
      "LLM",
      "月之暗面",
      "人工智能",
      "聊天机器人",
      "大模型",
      "Moonshot AI",
      "生产力工具"
    ]
  },
  {
    "name": "claude ai",
    "url": "https://claude.ai/new",
    "tags": [
      "AI",
      "LLM",
      "Anthropic",
      "Chatbot",
      "Generative AI",
      "Assistant"
    ]
  },
  {
    "name": "豆包",
    "url": "https://www.doubao.com/chat/",
    "tags": [
      "AI",
      "LLM",
      "字节跳动",
      "聊天机器人",
      "大模型",
      "生产力工具"
    ]
  },
  {
    "name": "Qwen",
    "url": "https://chat.qwen.ai/",
    "tags": [
      "AI",
      "LLM",
      "千问",
      "通义千问",
      "阿里巴巴",
      "Chatbot",
      "生成式AI"
    ]
  },
  {
    "name": "deepl",
    "url": "https://www.deepl.com/en/translator",
    "tags": [
      "AI",
      "翻译",
      "精准翻译",
      "工具",
      "在线翻译"
    ]
  },
  {
    "name": "google translate",
    "url": "https://translate.google.com/",
    "tags": [
      "AI",
      "翻译",
      "谷歌翻译",
      "Google",
      "在线翻译",
      "工具",
      "语言"
    ]
  },
  {
    "name": "baidu fanyi",
    "url": "http://fanyi.baidu.com/",
    "tags": [
      "AI",
      "翻译",
      "百度翻译",
      "百度",
      "在线翻译",
      "工具",
      "语言",
      "Baidu"
    ]
  },
  {
    "name": "马蜂窝",
    "url": "http://www.mafengwo.cn/",
    "tags": [
      "旅游",
      "攻略",
      "旅游攻略",
      "游记",
      "自由行",
      "酒店预订",
      "社区",
      "度假"
    ]
  },
  {
    "name": "知乎",
    "url": "http://zhihu.com/",
    "tags": [
      "问答社区",
      "知识分享",
      "社交",
      "综合",
      "内容社区"
    ]
  },
  {
    "name": "穷游",
    "url": "https://www.qyer.com/",
    "tags": [
      "旅游",
      "攻略",
      "出境游",
      "游记",
      "社区",
      "自由行",
      "签证"
    ]
  },
  {
    "name": "小红书",
    "url": "https://www.xiaohongshu.com/",
    "tags": [
      "旅游",
      "攻略",
      "生活分享",
      "社交",
      "社区",
      "时尚",
      "美妆",
      "种草"
    ]
  },
  {
    "name": "秘境輿圖",
    "url": "https://www.atlasobscura.com/",
    "tags": [
      "旅游",
      "攻略",
      "小众景点",
      "秘境",
      "地理",
      "历史",
      "猎奇",
      "文化"
    ]
  },
  {
    "name": "日本 jalan",
    "url": "https://www.jalan.net/",
    "tags": [
      "旅游",
      "日本旅游",
      "酒店预订",
      "住宿",
      "民宿",
      "日本景点"
    ]
  },
  {
    "name": "日本海边车站",
    "url": "https://seaside-station.com/region/hokkaido/",
    "tags": [
      "旅游",
      "日本景点",
      "绝景车站",
      "北海道",
      "铁道旅行",
      "摄影",
      "海边"
    ]
  },
  {
    "name": "ANA Blue Hangar Tour",
    "url": "https://ana-blue-hangar-tour.resv.jp/reserve/calendar.php",
    "tags": [
      "旅游",
      "日本景点",
      "机库参观",
      "全日空",
      "ANA",
      "航空",
      "羽田机场",
      "预约",
      "东京"
    ]
  },
  {
    "name": "JAL Sky Museum",
    "url": "https://jalfactorytour.my.salesforce-sites.com/rselectcourse?month=7&numberOfPeople=1&useWheelchair=%25E4%25B8%258D%25E8%25A6%2581%2BUnnecessary&year=2025",
    "tags": [
      "旅游",
      "日本景点",
      "航空博物馆",
      "JAL",
      "东京",
      "工厂参观",
      "预约",
      "羽田机场"
    ]
  },
  {
    "name": "首都圏外郭放水路",
    "url": "https://reserva.be/guidetour",
    "tags": [
      "旅游",
      "日本景点",
      "地下神殿",
      "埼玉",
      "水利工程",
      "建筑",
      "工业旅游",
      "预约"
    ]
  },
  {
    "name": "马蜂窝",
    "url": "http://www.mafengwo.cn/",
    "tags": [
      "旅游",
      "旅游攻略",
      "游记",
      "自由行",
      "门票",
      "景点门票",
      "酒店预订",
      "旅游社区",
      "度假"
    ]
  },
  {
    "name": "美团",
    "url": "https://www.meituan.com/",
    "tags": [
      "旅游",
      "门票",
      "团购优惠",
      "外卖",
      "美食",
      "生活服务",
      "酒店",
      "电影"
    ]
  },
  {
    "name": "大众点评",
    "url": "http://dianping.com/",
    "tags": [
      "美食",
      "团购",
      "点评",
      "本地生活",
      "旅游",
      "门票",
      "生活指南",
      "休闲娱乐"
    ]
  },
  {
    "name": "爱彼迎",
    "url": "https://airbnb.com/",
    "tags": [
      "旅游",
      "住宿",
      "民宿预订",
      "短租",
      "度假",
      "全球"
    ]
  },
  {
    "name": "飞猪",
    "url": "https://www.fliggy.com/",
    "tags": [
      "旅游",
      "住宿",
      "阿里旅行",
      "机票",
      "酒店",
      "度假",
      "出行"
    ]
  },
  {
    "name": "携程",
    "url": "http://ctrip.com/",
    "tags": [
      "旅游",
      "住宿",
      "机票",
      "酒店",
      "出行",
      "度假",
      "在线预订"
    ]
  },
  {
    "name": "去哪儿",
    "url": "http://www.qunar.com/",
    "tags": [
      "旅游",
      "住宿",
      "特价机票",
      "机票",
      "酒店",
      "火车票",
      "度假",
      "OTA",
      "出行"
    ]
  },
  {
    "name": "大众点评",
    "url": "http://dianping.com/",
    "tags": [
      "美食",
      "旅游",
      "点评",
      "生活服务",
      "团购",
      "休闲娱乐",
      "美食点评"
    ]
  },
  {
    "name": "欧美大众点评 Yelp",
    "url": "https://www.yelp.com/",
    "tags": [
      "旅游",
      "美食",
      "点评",
      "欧美点评",
      "生活服务",
      "消费指南"
    ]
  },
  {
    "name": "Trip Advisor",
    "url": "https://www.tripadvisor.com/",
    "tags": [
      "旅游",
      "美食",
      "猫途鹰",
      "酒店",
      "点评",
      "攻略",
      "景点",
      "机票",
      "全球旅行"
    ]
  },
  {
    "name": "日本 Tabelog",
    "url": "https://tabelog.com/cn/",
    "tags": [
      "旅游",
      "美食",
      "日本",
      "点评",
      "餐厅预约",
      "生活服务"
    ]
  },
  {
    "name": "日本 GURUNAVI",
    "url": "https://gurunavi.com/",
    "tags": [
      "日本",
      "美食",
      "美食指南",
      "餐厅搜索",
      "餐厅预订",
      "旅游"
    ]
  },
  {
    "name": "英国 Deliveroo",
    "url": "https://deliveroo.co.uk/",
    "tags": [
      "美食",
      "英国外卖",
      "生活服务",
      "外卖",
      "在线订餐",
      "英国"
    ]
  },
  {
    "name": "澳门 食在澳门",
    "url": "http://www.foodmacau.com/",
    "tags": [
      "旅游",
      "美食",
      "澳门美食",
      "澳门",
      "餐厅指南",
      "攻略"
    ]
  },
  {
    "name": "新加坡 Burpple",
    "url": "https://www.burpple.com/",
    "tags": [
      "旅游",
      "美食",
      "新加坡美食",
      "餐厅推荐",
      "美食评论",
      "美食指南",
      "本地生活",
      "餐厅发现"
    ]
  },
  {
    "name": "新加坡 Hungry Go Where",
    "url": "https://www.hungrygowhere.com/",
    "tags": [
      "新加坡",
      "美食",
      "美食指南",
      "餐厅评价",
      "旅游",
      "生活服务"
    ]
  },
  {
    "name": "印尼 Qraved",
    "url": "https://www.qraved.com/",
    "tags": [
      "美食",
      "印尼美食",
      "旅游",
      "餐厅推荐",
      "东南亚",
      "订餐",
      "生活方式"
    ]
  },
  {
    "name": "香港 Openrice",
    "url": "https://www.openrice.com/zh/hongkong",
    "tags": [
      "旅游",
      "美食",
      "开饭喇",
      "香港",
      "餐厅指南",
      "点评",
      "生活服务"
    ]
  },
  {
    "name": "台湾 爱食记",
    "url": "https://ifoodie.tw/",
    "tags": [
      "美食",
      "台湾",
      "餐厅推荐",
      "旅游",
      "食评",
      "生活服务"
    ]
  },
  {
    "name": "四万公里",
    "url": "https://www.40000km.com/",
    "tags": [
      "旅游",
      "美食",
      "摄影",
      "游记",
      "旅行摄影",
      "生活方式"
    ]
  },
  {
    "name": "Zomato",
    "url": "https://www.zomato.com/",
    "tags": [
      "旅游",
      "美食",
      "国际点评",
      "餐厅搜索",
      "外卖",
      "生活服务"
    ]
  },
  {
    "name": "美国中文网",
    "url": "http://www.sinovision.net/food.php",
    "tags": [
      "美食",
      "中餐资讯",
      "美国",
      "餐饮",
      "生活服务"
    ]
  },
  {
    "name": "全球美食地图",
    "url": "https://www.tasteatlas.com/search",
    "tags": [
      "旅游",
      "美食",
      "美食百科",
      "世界美食",
      "餐厅推荐",
      "地图",
      "饮食文化"
    ]
  },
  {
    "name": "神州租车",
    "url": "https://www.zuche.com/",
    "tags": [
      "出行",
      "租车",
      "国内租车",
      "神州租车",
      "旅游",
      "生活服务",
      "交通"
    ]
  },
  {
    "name": "一嗨租车",
    "url": "https://www.1hai.cn/",
    "tags": [
      "出行",
      "租车",
      "连锁租车",
      "交通",
      "自驾",
      "生活服务"
    ]
  },
  {
    "name": "携程租车",
    "url": "https://car.ctrip.com/",
    "tags": [
      "出行",
      "租车",
      "平台租车",
      "旅游",
      "携程",
      "交通",
      "生活服务"
    ]
  },
  {
    "name": "摩范出行",
    "url": "http://www.mofuntrip.com/",
    "tags": [
      "出行",
      "租车",
      "共享汽车",
      "分时租赁"
    ]
  },
  {
    "name": "EVCARD",
    "url": "https://www.evcard.com/",
    "tags": [
      "出行",
      "租车",
      "共享汽车",
      "新能源",
      "分时租赁"
    ]
  },
  {
    "name": "租租车",
    "url": "https://www.zuzuche.com/",
    "tags": [
      "出行",
      "租车",
      "境外租车",
      "自驾",
      "旅游"
    ]
  },
  {
    "name": "天巡",
    "url": "https://www.tianxun.com/",
    "tags": [
      "出行",
      "旅游",
      "机票",
      "机票比价",
      "酒店",
      "租车",
      "比价",
      "搜索"
    ]
  },
  {
    "name": "谷歌票务",
    "url": "https://www.google.com/travel/flights",
    "tags": [
      "出行",
      "飞机",
      "航班查询",
      "机票",
      "订票",
      "旅游",
      "Google"
    ]
  },
  {
    "name": "航线图",
    "url": "https://map.variflight.com/",
    "tags": [
      "出行",
      "飞机",
      "航空",
      "航线图",
      "地图",
      "飞行跟踪",
      "实时",
      "飞常准",
      "航线可视"
    ]
  },
  {
    "name": "flightradar24",
    "url": "https://www.flightradar24.com/",
    "tags": [
      "出行",
      "飞机",
      "航班追踪",
      "航空",
      "实时",
      "工具"
    ]
  },
  {
    "name": "飞常准",
    "url": "https://map.variflight.com/",
    "tags": [
      "出行",
      "飞机",
      "航班动态",
      "航空",
      "地图",
      "交通"
    ]
  },
  {
    "name": "航旅纵横",
    "url": "http://www.umetrip.com/",
    "tags": [
      "出行",
      "飞机",
      "行程管理",
      "航空",
      "机票",
      "航班查询"
    ]
  },
  {
    "name": "船讯网",
    "url": "http://www.shipxy.com/",
    "tags": [
      "航运",
      "物流",
      "船舶追踪",
      "AIS",
      "地图",
      "工具",
      "水运"
    ]
  },
  {
    "name": "12306",
    "url": "https://www.12306.cn/",
    "tags": [
      "出行",
      "火车",
      "铁路官网",
      "购票",
      "交通",
      "生活服务"
    ]
  },
  {
    "name": "无人机禁飞区",
    "url": "https://www.dji.com/cn/flysafe/geo-map",
    "tags": [
      "无人机",
      "大疆",
      "禁飞区",
      "限飞查询",
      "飞行安全",
      "地图",
      "出行",
      "工具"
    ]
  },
  {
    "name": "Google Maps",
    "url": "https://www.google.co.jp/maps",
    "tags": [
      "地图",
      "谷歌地图",
      "地理",
      "导航",
      "旅游",
      "工具",
      "交通"
    ]
  },
  {
    "name": "Google Earth",
    "url": "https://earth.google.com/web/",
    "tags": [
      "天文地理",
      "地图",
      "3D地图",
      "卫星影像",
      "地理信息",
      "科普",
      "在线工具"
    ]
  },
  {
    "name": "高德地图",
    "url": "https://amap.com/",
    "tags": [
      "地图",
      "导航",
      "出行",
      "交通",
      "生活服务",
      "工具"
    ]
  },
  {
    "name": "百度地图",
    "url": "http://map.baidu.com/",
    "tags": [
      "地图",
      "导航",
      "百度",
      "交通出行",
      "路线规划",
      "生活服务"
    ]
  },
  {
    "name": "兰图绘",
    "url": "https://www.ldmap.net/",
    "tags": [
      "地图",
      "地图绘制",
      "数据可视化",
      "地理信息系统",
      "商业地图",
      "生产力工具",
      "地理标注"
    ]
  },
  {
    "name": "房车营地",
    "url": "https://share.dituhui.com/?key=6d5397e8a78dde91b11189a017fc5e86&t=1575785943180",
    "tags": [
      "地图",
      "房车",
      "营地",
      "露营",
      "旅行",
      "户外",
      "地理"
    ]
  },
  {
    "name": "台风",
    "url": "http://typhoon.zjwater.gov.cn/default.aspx",
    "tags": [
      "天文地理",
      "天气",
      "台风路径",
      "气象",
      "生活工具",
      "防汛",
      "浙江",
      "地图"
    ]
  },
  {
    "name": "windy",
    "url": "https://www.windy.com/",
    "tags": [
      "天气",
      "全球气象",
      "地理",
      "可视化",
      "地图",
      "气象预测",
      "天文地理"
    ]
  },
  {
    "name": "卫星图",
    "url": "https://zoom.earth/",
    "tags": [
      "天文地理",
      "天气",
      "实时云图",
      "地图",
      "卫星",
      "气象",
      "台风追踪"
    ]
  },
  {
    "name": "彩云天气",
    "url": "http://www.caiyunapp.com/",
    "tags": [
      "天文地理",
      "天气",
      "分钟预报",
      "气象",
      "生活工具",
      "人工智能"
    ]
  },
  {
    "name": "光污染地图",
    "url": "https://www.lightpollutionmap.info",
    "tags": [
      "天文地理",
      "银河天相",
      "光害查询",
      "观星",
      "星空摄影",
      "夜空地图",
      "地理信息"
    ]
  },
  {
    "name": "光污染地图",
    "url": "https://www.darkmap.cn/",
    "tags": [
      "天文",
      "地理",
      "光污染",
      "暗夜地图",
      "观星",
      "星空摄影",
      "地图工具"
    ]
  },
  {
    "name": "Stellarium",
    "url": "http://stellarium.org/",
    "tags": [
      "天文地理",
      "虚拟天文",
      "虚拟天文馆",
      "开源软件",
      "星图",
      "科普",
      "教育",
      "天文软件"
    ]
  },
  {
    "name": "heavens-above",
    "url": "https://www.heavens-above.com/",
    "tags": [
      "天文",
      "卫星追踪",
      "卫星预测",
      "星图",
      "ISS",
      "天文学",
      "空间站",
      "天文观测"
    ]
  },
  {
    "name": "Deep Sky Stacker",
    "url": "http://deepskystacker.free.fr/",
    "tags": [
      "天文摄影",
      "深空摄影",
      "天文叠加",
      "图像处理",
      "天文软件",
      "开源软件"
    ]
  },
  {
    "name": "星空",
    "url": "https://stellarium-web.org/",
    "tags": [
      "天文",
      "星图",
      "虚拟天文馆",
      "观星",
      "科普",
      "在线工具",
      "银河",
      "星座",
      "科学探索"
    ]
  },
  {
    "name": "星图",
    "url": "https://stellarium-labs.com/stellarium-mobile-plus/",
    "tags": [
      "天文",
      "科普",
      "观星",
      "虚拟天文馆",
      "星图",
      "Stellarium",
      "移动应用",
      "银河天相"
    ]
  },
  {
    "name": "巧摄",
    "url": "https://planitphoto.cn/",
    "tags": [
      "天文地理",
      "银河天相",
      "摄影计划",
      "风光摄影",
      "摄影工具",
      "延时摄影"
    ]
  },
  {
    "name": "活动行",
    "url": "https://www.huodongxing.com/",
    "tags": [
      "活动",
      "活动报名",
      "票务",
      "生活",
      "娱乐",
      "社交",
      "会议"
    ]
  },
  {
    "name": "大麦",
    "url": "https://www.damai.cn/",
    "tags": [
      "娱乐",
      "活动",
      "票务平台",
      "演出",
      "演唱会",
      "购票",
      "生活服务"
    ]
  },
  {
    "name": "iMuseum",
    "url": "http://www.imuseum.cn/",
    "tags": [
      "博物馆",
      "展览",
      "艺术",
      "文化",
      "生活方式",
      "活动"
    ]
  },
  {
    "name": "内啥",
    "url": "https://www.neisha.cc/",
    "tags": [
      "租物",
      "信用租赁",
      "数码租赁",
      "摄影器材",
      "游戏设备",
      "户外用品",
      "生活服务"
    ]
  },
  {
    "name": "探物",
    "url": "http://www.tanwuz.com/",
    "tags": [
      "租物",
      "数码租赁",
      "共享经济",
      "数码",
      "电子产品"
    ]
  },
  {
    "name": "随手记",
    "url": "https://www.sui.com/",
    "tags": [
      "金融",
      "记账",
      "理财",
      "财务管理",
      "个人财务",
      "工具"
    ]
  },
  {
    "name": "wise",
    "url": "https://wise.com/",
    "tags": [
      "金融",
      "跨境汇款",
      "支付",
      "借记卡",
      "数字银行",
      "外汇"
    ]
  },
  {
    "name": "revolut",
    "url": "https://www.revolut.com/",
    "tags": [
      "金融",
      "信用卡",
      "数字银行",
      "支付",
      "外汇",
      "理财",
      "跨境",
      "Fintech"
    ]
  },
  {
    "name": "3D Rotation Converter",
    "url": "https://www.andre-gaschler.com/rotationconverter/",
    "tags": [
      "3D",
      "数学",
      "旋转转换",
      "工具",
      "在线工具",
      "四元数",
      "欧拉角",
      "计算机图形学",
      "机器人"
    ]
  },
  {
    "name": "不定积分计算器",
    "url": "https://zh.numberempire.com/integralcalculator.php",
    "tags": [
      "学习",
      "数学",
      "积分计算",
      "工具",
      "微积分",
      "计算器"
    ]
  },
  {
    "name": "mathway",
    "url": "https://www.mathway.com/Algebra",
    "tags": [
      "学习",
      "数学",
      "数学求解",
      "工具",
      "代数",
      "计算器",
      "在线工具"
    ]
  },
  {
    "name": "symbolab",
    "url": "https://www.symbolab.com/solver/integral-calculator",
    "tags": [
      "学习",
      "数学",
      "步骤求解",
      "工具",
      "计算器",
      "微积分",
      "积分",
      "在线工具"
    ]
  },
  {
    "name": "InstaCalc",
    "url": "https://instacalc.com/",
    "tags": [
      "学习",
      "数学",
      "即时计算",
      "工具",
      "在线计算器",
      "生产力"
    ]
  },
  {
    "name": "在线手绘数学",
    "url": "https://webdemo.myscript.com/",
    "tags": [
      "学习",
      "数学",
      "手写识别",
      "工具",
      "LaTeX",
      "公式识别",
      "在线工具"
    ]
  },
  {
    "name": "wolfram",
    "url": "https://www.wolframalpha.com/",
    "tags": [
      "学习",
      "数学",
      "知识引擎",
      "工具",
      "科学",
      "计算器",
      "学术"
    ]
  },
  {
    "name": "数学公式 latex",
    "url": "https://zh.wikipedia.org/zh-cn/Help:%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F",
    "tags": [
      "学习",
      "数学",
      "公式语法",
      "LaTeX",
      "维基百科",
      "参考手册",
      "排版",
      "TeX"
    ]
  },
  {
    "name": "状态估计",
    "url": "https://www.lukesy.net/docs/self-study/barfoot-ser/",
    "tags": [
      "学习",
      "数学",
      "机器人学",
      "状态估计",
      "SLAM"
    ]
  },
  {
    "name": "计算机课程 163",
    "url": "https://study.163.com/curricula/cs.htm",
    "tags": [
      "学习",
      "课程",
      "网易云课",
      "计算机",
      "编程",
      "CS"
    ]
  },
  {
    "name": "51CTO",
    "url": "https://edu.51cto.com/",
    "tags": [
      "学习",
      "课程",
      "IT培训",
      "编程",
      "在线教育",
      "技术",
      "计算机"
    ]
  },
  {
    "name": "日语课",
    "url": "http://class.taoyu360.com.cn/taoyu360?intercept=0",
    "tags": [
      "学习",
      "课程",
      "在线日语",
      "日语",
      "语言学习",
      "日语学习",
      "桃鱼日语"
    ]
  },
  {
    "name": "coursera",
    "url": "https://www.coursera.org/",
    "tags": [
      "学习",
      "课程",
      "在线课程",
      "MOOC",
      "教育",
      "技能提升",
      "证书"
    ]
  },
  {
    "name": "知网",
    "url": "https://www.cnki.net/",
    "tags": [
      "学习",
      "学术",
      "学术论文",
      "文献检索",
      "科研",
      "数据库",
      "期刊"
    ]
  },
  {
    "name": "超星",
    "url": "http://www.chaoxing.com/",
    "tags": [
      "学习",
      "学术",
      "数字图书",
      "教育",
      "在线课程",
      "电子书",
      "网课",
      "数据库"
    ]
  },
  {
    "name": "AI Reads Science",
    "url": "https://www.aminer.org/",
    "tags": [
      "学术",
      "学术搜索",
      "人工智能",
      "科研",
      "论文搜索",
      "文献检索",
      "学习",
      "大数据"
    ]
  },
  {
    "name": "东南大学全景",
    "url": "https://720yun.com/t/b242awafq1g?scene_id=14810",
    "tags": [
      "东南大学",
      "校园全景",
      "VR",
      "高校",
      "虚拟校园",
      "校园"
    ]
  },
  {
    "name": "集智俱乐部·注意力与知识管理群 的共享知识管理系统",
    "url": "https://swarma-km.hintsnet.com/",
    "tags": [
      "学习",
      "资料",
      "知识管理",
      "集智俱乐部",
      "协同",
      "人工智能",
      "复杂系统"
    ]
  },
  {
    "name": "全历史",
    "url": "https://www.allhistory.com/",
    "tags": [
      "学习",
      "资料",
      "历史",
      "历史图谱",
      "可视化",
      "百科",
      "人文",
      "工具"
    ]
  },
  {
    "name": "南宝瓶座δ流星雨 meteor shower",
    "url": "https://www.meteorshowers.org/",
    "tags": [
      "学习",
      "资料",
      "流星雨",
      "天文",
      "科学",
      "可视化"
    ]
  },
  {
    "name": "权威数据 海量聚合",
    "url": "https://www.dydata.io/",
    "tags": [
      "数据聚合",
      "行业报告",
      "数据分析",
      "可视化",
      "统计",
      "资料",
      "工具"
    ]
  },
  {
    "name": "测测你的眼睛对色差的辨识度",
    "url": "http://www.cuishuai.cc/game/",
    "tags": [
      "色彩测试",
      "游戏",
      "视觉测试",
      "在线工具",
      "趣味"
    ]
  },
  {
    "name": "彩虹屁生成器",
    "url": "https://chp.shadiao.app/",
    "tags": [
      "学习",
      "资料",
      "趣味生成"
    ]
  },
  {
    "name": "web cam",
    "url": "https://www.skylinewebcams.com/",
    "tags": [
      "实时监控",
      "旅游",
      "风景",
      "直播",
      "全球"
    ]
  },
  {
    "name": "pixelspace_solarsystem",
    "url": "https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html",
    "tags": [
      "学习",
      "资料",
      "太阳系",
      "天文",
      "科普",
      "宇宙",
      "可视化",
      "交互"
    ]
  },
  {
    "name": "报告查一查",
    "url": "https://report.seedsufe.com/#/report",
    "tags": [
      "学习",
      "资料",
      "研报查询",
      "行业报告",
      "金融",
      "数据"
    ]
  },
  {
    "name": "标准地图服务",
    "url": "http://bzdt.ch.mnr.gov.cn/index.html",
    "tags": [
      "学习",
      "资料",
      "官方地图",
      "地图",
      "工具",
      "地理",
      "素材",
      "政府服务",
      "权威"
    ]
  },
  {
    "name": "地图书人文地理知识库",
    "url": "https://www.ageeye.cn/",
    "tags": [
      "学习",
      "资料",
      "人文地理",
      "地图",
      "历史",
      "历史地理",
      "古地图",
      "地理信息"
    ]
  },
  {
    "name": "假装编程",
    "url": "https://geektyper.com/",
    "tags": [
      "黑客模拟",
      "模拟器",
      "恶搞",
      "娱乐",
      "极客",
      "解压"
    ]
  },
  {
    "name": "在线编程",
    "url": "https://replit.com/languages",
    "tags": [
      "编程",
      "在线编程",
      "云端IDE",
      "Replit",
      "开发工具",
      "协作开发"
    ]
  },
  {
    "name": "在线 matlab",
    "url": "https://octave-online.net/",
    "tags": [
      "编程",
      "在线编程",
      "Octave",
      "MATLAB",
      "科学计算",
      "数学",
      "在线工具"
    ]
  },
  {
    "name": "算法可视化",
    "url": "https://algorithm-visualizer.org/",
    "tags": [
      "编程",
      "算法可视化",
      "算法演示",
      "数据结构",
      "学习资源",
      "在线工具",
      "计算机科学"
    ]
  },
  {
    "name": "可视化",
    "url": "https://visualgo.net/en",
    "tags": [
      "编程",
      "算法可视化",
      "数据结构",
      "算法",
      "计算机科学",
      "学习工具",
      "面试准备"
    ]
  },
  {
    "name": "cpp ref",
    "url": "http://www.cplusplus.com/",
    "tags": [
      "编程",
      "手册",
      "C++参考",
      "C++",
      "文档",
      "开发"
    ]
  },
  {
    "name": "常用API文档索引",
    "url": "https://tool.oschina.net/apidocs",
    "tags": [
      "编程",
      "手册",
      "API文档",
      "在线工具",
      "开发工具",
      "参考"
    ]
  },
  {
    "name": "牛客",
    "url": "https://www.nowcoder.com/",
    "tags": [
      "编程",
      "刷题",
      "求职刷题",
      "招聘",
      "面试",
      "笔试",
      "程序员",
      "互联网"
    ]
  },
  {
    "name": "leetcode",
    "url": "https://leetcode.com/",
    "tags": [
      "编程",
      "刷题",
      "算法",
      "数据结构",
      "面试",
      "力扣",
      "LeetCode"
    ]
  },
  {
    "name": "九章算法",
    "url": "https://www.jiuzhang.com/solutions/",
    "tags": [
      "编程",
      "刷题",
      "算法面试",
      "数据结构",
      "求职",
      "LeetCode",
      "程序员面试"
    ]
  },
  {
    "name": "hihocoder",
    "url": "http://hihocoder.com/",
    "tags": [
      "编程",
      "刷题",
      "编程竞赛",
      "算法",
      "Online Judge",
      "OJ"
    ]
  },
  {
    "name": "lintcode",
    "url": "https://www.lintcode.com/",
    "tags": [
      "编程",
      "刷题",
      "代码面试",
      "算法",
      "数据结构",
      "LintCode",
      "程序员"
    ]
  },
  {
    "name": "西部数码",
    "url": "https://www.west.cn/login.asp?pageStr=/manager/domain/rsall.asp",
    "tags": [
      "域名",
      "域名注册",
      "云计算",
      "云服务",
      "服务器",
      "网站建设"
    ]
  },
  {
    "name": "feed creator",
    "url": "http://createfeed.fivefilters.org/",
    "tags": [
      "RSS生成",
      "RSS",
      "Feed制作",
      "网页工具",
      "自动化"
    ]
  },
  {
    "name": "followthatpage",
    "url": "https://www.followthatpage.com/",
    "tags": [
      "网页监控",
      "信息监控",
      "效率工具",
      "内容提醒"
    ]
  },
  {
    "name": "微信 pc 防撤回",
    "url": "https://github.com/huiyadanli/RevokeMsgPatcher",
    "tags": [
      "微信",
      "防撤回",
      "补丁",
      "开源",
      "Windows",
      "电脑软件",
      "装机",
      "QQ",
      "工具"
    ]
  },
  {
    "name": "shadowsocks",
    "url": "https://portal.shadowsocks.au/",
    "tags": [
      "电脑软件",
      "网络工具",
      "代理",
      "科学上网",
      "Shadowsocks",
      "翻墙工具"
    ]
  },
  {
    "name": "SSRDOG",
    "url": "https://dog.hosbbq.com/",
    "tags": [
      "机场推荐",
      "科学上网",
      "VPN",
      "网络工具",
      "代理"
    ]
  },
  {
    "name": "传文件",
    "url": "https://airportal.cn/",
    "tags": [
      "文件传输",
      "在线工具",
      "跨平台",
      "效率工具",
      "快传助手"
    ]
  },
  {
    "name": "TailScale VPN",
    "url": "https://login.tailscale.com/admin/machines",
    "tags": [
      "Tailscale",
      "VPN",
      "网络工具",
      "远程访问",
      "虚拟局域网",
      "内网穿透",
      "管理后台",
      "电脑软件"
    ]
  },
  {
    "name": "异次元软件世界",
    "url": "https://www.iplaysoft.com/",
    "tags": [
      "电脑软件",
      "软件推荐",
      "软件购买",
      "Windows",
      "macOS",
      "iOS",
      "Android",
      "效率工具",
      "科技资讯",
      "资源下载"
    ]
  },
  {
    "name": "文档格式转换",
    "url": "https://www.alltoall.net/",
    "tags": [
      "在线工具",
      "格式转换",
      "文档处理",
      "文件转换",
      "数据处理工具"
    ]
  },
  {
    "name": "格式转换",
    "url": "https://www.aconvert.com/cn/",
    "tags": [
      "在线转换",
      "格式转换",
      "文件处理",
      "文档处理",
      "多媒体转换",
      "PDF工具",
      "数据处理工具"
    ]
  },
  {
    "name": "白描 OCR",
    "url": "https://web.baimiaoapp.com/",
    "tags": [
      "数据处理工具",
      "文档处理",
      "文字识别",
      "OCR",
      "图片转文字",
      "生产力工具",
      "在线工具"
    ]
  },
  {
    "name": "扫描全能王",
    "url": "https://v3.camscanner.com/",
    "tags": [
      "文档扫描",
      "文档处理",
      "OCR文字识别",
      "PDF转换",
      "办公工具",
      "效率工具",
      "在线工具"
    ]
  },
  {
    "name": "temp mail",
    "url": "https://temp-mail.org/",
    "tags": [
      "临时邮箱",
      "临时注册",
      "隐私保护",
      "网络工具",
      "电子邮件"
    ]
  },
  {
    "name": "在线画图",
    "url": "https://excalidraw.com/",
    "tags": [
      "在线画图",
      "共享画布",
      "手绘风格",
      "流程图",
      "虚拟白板",
      "原型设计"
    ]
  },
  {
    "name": "在线画布",
    "url": "https://canvas.apps.chrome/",
    "tags": [
      "谷歌画布",
      "绘画工具",
      "在线绘图",
      "涂鸦",
      "谷歌工具",
      "设计工具"
    ]
  },
  {
    "name": "在线画布",
    "url": "https://miro.com/signup/",
    "tags": [
      "共享画布",
      "协作白板",
      "在线白板",
      "协作工具",
      "效率工具",
      "流程图",
      "远程办公",
      "可视化工具"
    ]
  },
  {
    "name": "空白网页",
    "url": "data:text/html,%20<html%20contenteditable>",
    "tags": [
      "极简笔记",
      "文本编辑",
      "临时草稿",
      "生产力工具",
      "浏览器技巧"
    ]
  },
  {
    "name": "在线 latex",
    "url": "https://www.overleaf.com/",
    "tags": [
      "LaTeX",
      "在线编辑",
      "协作",
      "写作",
      "论文写作",
      "科研工具"
    ]
  },
  {
    "name": "据意查句",
    "url": "https://wantquotes.net/",
    "tags": [
      "写作",
      "句子搜索",
      "文案",
      "灵感",
      "金句",
      "素材",
      "工具"
    ]
  },
  {
    "name": "汉语反向词典 万词王",
    "url": "https://wantwords.net/",
    "tags": [
      "写作",
      "词典",
      "词汇搜索",
      "反向词典",
      "工具",
      "语言学习",
      "灵感",
      "创造"
    ]
  },
  {
    "name": "微信公众号",
    "url": "https://mp.weixin.qq.com/",
    "tags": [
      "写作",
      "公众平台",
      "创作",
      "自媒体",
      "微信",
      "运营",
      "内容管理"
    ]
  },
  {
    "name": "instagram font",
    "url": "https://lingojam.com/FontsForInstagram",
    "tags": [
      "字体生成",
      "社交媒体",
      "工具",
      "Instagram",
      "花式字体",
      "文字样式",
      "装饰"
    ]
  },
  {
    "name": "CG资源网",
    "url": "https://www.cgown.com/",
    "tags": [
      "视频剪辑资源",
      "CG素材",
      "AE模板",
      "PR模板",
      "后期特效",
      "插件",
      "教程",
      "设计素材"
    ]
  },
  {
    "name": "AE模板",
    "url": "https://www.newcger.com/",
    "tags": [
      "视频剪辑资源",
      "视频模板",
      "AE模板",
      "PR模板",
      "影视后期",
      "素材",
      "新CG儿"
    ]
  },
  {
    "name": "Adobe 资源",
    "url": "http://adobe.v404.cn/adobe/",
    "tags": [
      "Adobe",
      "软件下载",
      "设计工具",
      "视频剪辑",
      "图像处理",
      "生产力工具",
      "全家桶"
    ]
  },
  {
    "name": "删除视频背景",
    "url": "https://www.unscreen.com/",
    "tags": [
      "视频抠图",
      "背景移除",
      "AI工具",
      "视频剪辑资源",
      "在线工具",
      "设计工具"
    ]
  },
  {
    "name": "游戏3D地图",
    "url": "https://noclip.website/",
    "tags": [
      "游戏场景",
      "3D地图",
      "视频剪辑资源",
      "关卡设计",
      "游戏开发",
      "素材",
      "参考资料"
    ]
  },
  {
    "name": "视频字幕",
    "url": "https://2zimu.com/#/",
    "tags": [
      "视频剪辑",
      "双语字幕",
      "视频翻译",
      "语音转文字",
      "AI工具",
      "在线工具"
    ]
  },
  {
    "name": "第一 ppt",
    "url": "https://www.1ppt.com/",
    "tags": [
      "PPT",
      "PPT模板",
      "PPT素材",
      "PPT背景",
      "PPT图表",
      "PPT教程",
      "办公",
      "课件"
    ]
  },
  {
    "name": "slidesgo",
    "url": "https://slidesgo.com/theme/isometric-proposal",
    "tags": [
      "创造",
      "PPT",
      "谷歌幻灯",
      "模板",
      "演示文稿",
      "设计",
      "办公"
    ]
  },
  {
    "name": "officeplus",
    "url": "https://www.officeplus.cn/",
    "tags": [
      "PPT",
      "微软官方",
      "模板",
      "Office",
      "Word",
      "Excel",
      "办公",
      "素材"
    ]
  },
  {
    "name": "词云",
    "url": "https://www.weiciyun.com/",
    "tags": [
      "词云生成",
      "数据可视化",
      "在线工具",
      "设计",
      "PPT",
      "排版"
    ]
  },
  {
    "name": "千亿像素看中国",
    "url": "http://pf.bigpixel.cn/zh-CN.html",
    "tags": [
      "全景图片",
      "千亿像素",
      "摄影",
      "航拍",
      "旅游",
      "中国",
      "图片"
    ]
  },
  {
    "name": "删除图片背景",
    "url": "https://www.remove.bg/",
    "tags": [
      "图片",
      "图片抠图",
      "背景移除",
      "AI",
      "在线工具",
      "设计"
    ]
  },
  {
    "name": "搞定设计",
    "url": "https://www.gaoding.com/introduction",
    "tags": [
      "在线设计",
      "图片编辑",
      "平面设计",
      "海报制作",
      "设计模板",
      "AI工具",
      "视频剪辑",
      "电商美工"
    ]
  },
  {
    "name": "浏览器插件列表",
    "url": "https://github.com/yvonshong/website/blob/master/web-browser-expansion.md",
    "tags": [
      "浏览器插件",
      "插件推荐",
      "GitHub",
      "工具",
      "资源列表",
      "生产力",
      "下载"
    ]
  },
  {
    "name": "海盗湾",
    "url": "https://thepiratebay.by/",
    "tags": [
      "下载",
      "搜索",
      "BT下载",
      "磁力链接",
      "种子",
      "资源",
      "P2P"
    ]
  },
  {
    "name": "BT天堂",
    "url": "http://www.bttiantang.com/",
    "tags": [
      "BT",
      "磁力",
      "种子",
      "电影下载",
      "影视",
      "下载",
      "资源"
    ]
  },
  {
    "name": "云搜",
    "url": "http://www.daysou.com/",
    "tags": [
      "搜索",
      "网盘搜索",
      "资源搜索",
      "下载",
      "工具"
    ]
  },
  {
    "name": "印象",
    "url": "https://impress.pw/",
    "tags": [
      "下载",
      "搜索",
      "资源搜索",
      "网盘搜索",
      "工具"
    ]
  },
  {
    "name": "duckduckgo",
    "url": "https://duckduckgo.com/",
    "tags": [
      "搜索",
      "隐私搜索",
      "搜索引擎",
      "隐私保护"
    ]
  },
  {
    "name": "最专业ip数据库、手机号数据库、列车时刻数据库",
    "url": "http://www.123cha.com/",
    "tags": [
      "综合查询",
      "在线工具",
      "生活服务",
      "数据库",
      "IP查询",
      "查询工具"
    ]
  },
  {
    "name": "AOL",
    "url": "https://www.aol.com/",
    "tags": [
      "美国在线",
      "搜索",
      "门户",
      "新闻",
      "邮箱",
      "媒体"
    ]
  },
  {
    "name": "努努影院",
    "url": "https://www.nunuyy1.org/",
    "tags": [
      "下载",
      "电影资源",
      "在线影视",
      "电视剧",
      "动漫",
      "综艺",
      "视频"
    ]
  },
  {
    "name": "知乎汇总",
    "url": "https://www.zhihu.com/question/267327916/answer/2195303727",
    "tags": [
      "知乎",
      "电子书",
      "下载",
      "资源汇总",
      "网站推荐"
    ]
  },
  {
    "name": "IT 电子书",
    "url": "https://it-ebooks.info/",
    "tags": [
      "IT",
      "电子书",
      "技术书籍",
      "下载",
      "编程",
      "计算机",
      "英文",
      "免费"
    ]
  },
  {
    "name": "图灵",
    "url": "https://www.ituring.com.cn/",
    "tags": [
      "图灵社区",
      "电子书",
      "编程",
      "技术",
      "计算机",
      "IT",
      "书籍",
      "出版"
    ]
  },
  {
    "name": "鸠摩搜书",
    "url": "https://www.jiumodiary.com/",
    "tags": [
      "电子书",
      "搜索",
      "资源",
      "工具",
      "下载",
      "搜索引擎"
    ]
  },
  {
    "name": "国家标准",
    "url": "http://openstd.samr.gov.cn/bzgk/gb/",
    "tags": [
      "国家标准",
      "国标查询",
      "标准下载",
      "官方",
      "工具",
      "查询"
    ]
  },
  {
    "name": "全国图书馆参考咨询联盟",
    "url": "http://www.ucdrs.superlib.net/",
    "tags": [
      "图书馆",
      "文献传递",
      "电子书",
      "学术资源",
      "参考咨询",
      "文献检索",
      "下载"
    ]
  },
  {
    "name": "instagram indown",
    "url": "https://indown.io/zh",
    "tags": [
      "Instagram",
      "下载",
      "IG下载",
      "视频下载",
      "图片下载",
      "工具",
      "在线工具"
    ]
  },
  {
    "name": "igram",
    "url": "https://igram.world/zh/reels-downloader",
    "tags": [
      "Instagram",
      "视频下载",
      "Reels下载",
      "工具",
      "下载",
      "在线工具"
    ]
  },
  {
    "name": "今日热榜",
    "url": "https://tophub.today/",
    "tags": [
      "新闻",
      "资讯",
      "聚合",
      "热榜",
      "实时",
      "排行榜",
      "信息"
    ]
  },
  {
    "name": "网站推荐",
    "url": "https://xiangjianan.gitee.io/lks/",
    "tags": [
      "站点分享",
      "网址导航",
      "工具",
      "资源",
      "信息"
    ]
  },
  {
    "name": "wikihow",
    "url": "https://zh.wikihow.com/%E9%A6%96%E9%A1%B5",
    "tags": [
      "生活指南",
      "教程",
      "百科",
      "DIY",
      "指南"
    ]
  },
  {
    "name": "inoreader",
    "url": "https://www.inoreader.com/all_articles",
    "tags": [
      "新闻",
      "RSS阅读",
      "效率工具",
      "资讯",
      "内容订阅",
      "聚合阅读"
    ]
  },
  {
    "name": "animagraffs",
    "url": "https://animagraffs.com/",
    "tags": [
      "机械原理",
      "教育",
      "可视化",
      "3D动画",
      "工程",
      "科普"
    ]
  },
  {
    "name": "有趣网址之家 收藏全球最有趣的网站",
    "url": "https://youquhome.com/",
    "tags": [
      "网址导航",
      "趣味导航",
      "酷站",
      "资源发现",
      "创意"
    ]
  },
  {
    "name": "即时工具",
    "url": "https://www.67tool.com/",
    "tags": [
      "在线工具",
      "合辑网站",
      "效率工具",
      "生产力",
      "网页工具"
    ]
  },
  {
    "name": "MikuTools - 工具集合",
    "url": "https://tools.miku.ac/",
    "tags": [
      "合辑网站",
      "极简工具",
      "在线工具",
      "效率工具",
      "实用工具"
    ]
  },
  {
    "name": "精选创意导航",
    "url": "https://creativemass.cn/#/",
    "tags": [
      "设计导航",
      "创意设计",
      "合辑网站",
      "工具",
      "灵感"
    ]
  },
  {
    "name": "考拉新媒体导航",
    "url": "https://www.kaolamedia.com/",
    "tags": [
      "新媒体",
      "运营工具",
      "导航网站",
      "合辑网站",
      "内容创作",
      "热点追踪",
      "设计工具"
    ]
  },
  {
    "name": "优优网",
    "url": "https://uiiiuiii.com/tools",
    "tags": [
      "设计教程",
      "设计工具",
      "合辑网站",
      "在线工具",
      "素材",
      "导航"
    ]
  },
  {
    "name": "QQ浏览器帮小忙, 万能工具宝藏",
    "url": "https://tool.browser.qq.com/",
    "tags": [
      "在线工具",
      "效率工具",
      "合辑网站",
      "腾讯工具",
      "万能工具箱"
    ]
  },
  {
    "name": "LKS SITE",
    "url": "https://lkssite.vip/",
    "tags": [
      "个人导航",
      "合辑网站",
      "网址导航",
      "实用工具",
      "资源分享",
      "信息聚合"
    ]
  },
  {
    "name": "AI工具集",
    "url": "https://ai-bot.cn/",
    "tags": [
      "AI导航",
      "合辑网站",
      "AI工具",
      "生产力",
      "人工智能"
    ]
  },
  {
    "name": "Shotdeck",
    "url": "https://shotdeck.com/welcome/home",
    "tags": [
      "影视素材",
      "剧照",
      "摄影参考",
      "灵感",
      "分镜",
      "电影",
      "调色",
      "构图"
    ]
  },
  {
    "name": "Grid Type",
    "url": "https://www.grid-type.com/",
    "tags": [
      "设计工具",
      "字体设计",
      "网格系统",
      "在线工具",
      "创意设计",
      "灵感与素材"
    ]
  },
  {
    "name": "Liquid Paper",
    "url": "https://liquid.paper.design/",
    "tags": [
      "创造",
      "灵感与素材",
      "设计工具",
      "Logo设计",
      "液态金属",
      "动效",
      "在线工具",
      "视觉效果"
    ]
  },
  {
    "name": "NBFox",
    "url": "https://www.nbfox.com/",
    "tags": [
      "艺术",
      "名画",
      "高清",
      "灵感",
      "素材",
      "无版权",
      "设计",
      "审美"
    ]
  },
  {
    "name": "Gallerix",
    "url": "http://en.gallerix.ru/",
    "tags": [
      "艺术",
      "名画",
      "美术馆",
      "绘画",
      "灵感",
      "素材",
      "高分辨率",
      "在线图库"
    ]
  },
  {
    "name": "Chuangkit 创客贴",
    "url": "https://www.chuangkit.com/dc.html",
    "tags": [
      "平面设计",
      "在线设计",
      "设计工具",
      "海报制作",
      "设计素材",
      "PPT模板",
      "灵感",
      "生产力工具"
    ]
  },
  {
    "name": "LS Graphics",
    "url": "https://www.ls.graphics/meshgradients",
    "tags": [
      "设计",
      "设计资源",
      "素材",
      "渐变",
      "背景",
      "弥散渐变",
      "灵感"
    ]
  },
  {
    "name": "WangYasai",
    "url": "https://wangyasai.github.io/",
    "tags": [
      "创造",
      "灵感与素材",
      "设计工具",
      "生成器",
      "数据可视化",
      "在线工具",
      "个人网站"
    ]
  },
  {
    "name": "Creative Mass",
    "url": "https://creativemass.cn/#/",
    "tags": [
      "设计",
      "设计导航",
      "灵感",
      "素材",
      "创意",
      "UI设计",
      "视觉传达"
    ]
  },
  {
    "name": "FotoJet",
    "url": "http://www.fotojet.com/",
    "tags": [
      "在线图形设计",
      "图片编辑",
      "照片拼图",
      "平面设计",
      "创意工具",
      "模板库",
      "设计工具"
    ]
  },
  {
    "name": "Dribbble",
    "url": "https://dribbble.com/wagerfield",
    "tags": [
      "设计",
      "灵感与素材",
      "UI/UX",
      "作品集",
      "创造",
      "顶尖设计师社区",
      "交互设计",
      "前端开发",
      "[可疑链接已删除]()",
      "CG",
      "素材",
      "资源",
      "灵感",
      "3D",
      "设计",
      "艺术",
      "创作"
    ]
  },
  {
    "name": "Akuziti",
    "url": "http://www.akuziti.com/yw/",
    "tags": [
      "设计工具",
      "灵感与素材",
      "艺术字体",
      "字体生成",
      "在线工具",
      "英文字体"
    ]
  },
  {
    "name": "Pattern Monster",
    "url": "https://cn.pattern.monster/",
    "tags": [
      "设计工具",
      "灵感素材",
      "背景生成器",
      "SVG",
      "图案",
      "纹理"
    ]
  },
  {
    "name": "UiiiUiii",
    "url": "https://uiiiuiii.com/tools",
    "tags": [
      "创造",
      "灵感与素材",
      "设计工具",
      "在线神器",
      "优设网"
    ]
  },
  {
    "name": "Dimensions",
    "url": "https://www.dimensions.com/",
    "tags": [
      "创造",
      "灵感与素材",
      "尺寸参考",
      "设计参考",
      "人体工程学",
      "建筑设计",
      "工业设计"
    ]
  },
  {
    "name": "Hanabi 花火",
    "url": "https://hanabi.data-viz.cn/index?lang=zh-CN",
    "tags": [
      "创造",
      "数据可视化",
      "图表制作",
      "设计工具",
      "在线工具"
    ]
  },
  {
    "name": "LTFC",
    "url": "https://www.ltfc.net/exhibit/recent",
    "tags": [
      "书法",
      "绘画",
      "艺术",
      "国画",
      "灵感与素材",
      "中国传统文化",
      "素材下载",
      "高清资源"
    ]
  },
  {
    "name": "Yura Fuca",
    "url": "http://yurafuca.com/5000choyen/",
    "tags": [
      "创造",
      "灵感与素材",
      "字体生成器",
      "5000兆日元",
      "综艺风",
      "特效字体",
      "设计工具",
      "在线工具"
    ]
  },
  {
    "name": "Douga Work",
    "url": "https://douga.work/free-distribution-psdfx-001/",
    "tags": [
      "设计素材",
      "视频剪辑",
      "字体效果",
      "综艺感",
      "PSD",
      "免费资源",
      "灵感与素材"
    ]
  },
  {
    "name": "TV Sozai",
    "url": "https://tvsozai.com/4639/",
    "tags": [
      "灵感与素材",
      "综艺感",
      "字体素材",
      "视频后期",
      "字幕包装",
      "设计素材",
      "日本设计"
    ]
  },
  {
    "name": "Irasutoya",
    "url": "https://www.irasutoya.com/",
    "tags": [
      "创造",
      "灵感与素材",
      "插画",
      "设计素材",
      "日本",
      "免费",
      "图形资源"
    ]
  },
  {
    "name": "Veleap",
    "url": "http://veleap.com/console/works/material/nav",
    "tags": [
      "AE插件",
      "AE脚本",
      "AE教程",
      "设计素材",
      "视频制作",
      "设计师工具",
      "创作社区",
      "视杏科技",
      "素材库"
    ]
  },
  {
    "name": "Game UI Database",
    "url": "https://www.gameuidatabase.com/",
    "tags": [
      "创造",
      "灵感与素材",
      "游戏UI",
      "界面设计",
      "参考资料"
    ]
  },
  {
    "name": "Zh.iFixit",
    "url": "https://zh.ifixit.com/",
    "tags": [
      "实用工具",
      "电子产品",
      "维修指南",
      "硬件拆解",
      "DIY教程",
      "生活百科"
    ]
  },
  {
    "name": "AIPPT",
    "url": "https://www.aippt.cn/",
    "tags": [
      "实用工具与资源",
      "办公效率",
      "AI工具",
      "PPT生成",
      "演示文稿",
      "人工智能"
    ]
  },
  {
    "name": "TinyURL",
    "url": "https://tinyurl.com/j2ctranslation",
    "tags": [
      "实用工具与资源",
      "办公、查询、转换与效率提升",
      "日翻中易错翻译对照表",
      "日语翻译",
      "翻译参考",
      "语言学习"
    ]
  },
  {
    "name": "DeepL",
    "url": "https://www.deepl.com/translator",
    "tags": [
      "翻译",
      "AI",
      "人工智能",
      "效率工具",
      "办公",
      "实用工具",
      "语言处理"
    ]
  },
  {
    "name": "AirPortal",
    "url": "https://airportal.cn/",
    "tags": [
      "实用工具",
      "文件传输",
      "跨平台",
      "效率工具",
      "文件分享",
      "在线工具"
    ]
  },
  {
    "name": "Temp Mail",
    "url": "https://temp-mail.org/zh/",
    "tags": [
      "实用工具",
      "办公效率",
      "临时邮箱",
      "隐私保护",
      "验证码接收",
      "匿名邮箱",
      "网络安全"
    ]
  },
  {
    "name": "AllToAll",
    "url": "https://www.alltoall.net/",
    "tags": [
      "在线工具",
      "格式转换",
      "办公效率",
      "文件处理",
      "资源网站"
    ]
  },
  {
    "name": "Aconvert",
    "url": "https://www.aconvert.com/cn/",
    "tags": [
      "实用工具",
      "在线转换",
      "文件格式转换",
      "PDF处理",
      "视频转换",
      "图片转换",
      "音频转换",
      "办公效率",
      "电子书转换"
    ]
  },
  {
    "name": "Hotkey Cheatsheet",
    "url": "https://hotkeycheatsheet.com/zh",
    "tags": [
      "实用工具",
      "快捷键",
      "速查表",
      "效率提升",
      "生产力",
      "参考资料"
    ]
  },
  {
    "name": "GreasyFork",
    "url": "https://greasyfork.org/zh-CN",
    "tags": [
      "实用工具",
      "浏览器脚本",
      "油猴脚本",
      "效率提升",
      "软件资源",
      "开发者工具"
    ]
  },
  {
    "name": "Grammarly",
    "url": "https://app.grammarly.com/",
    "tags": [
      "实用工具与资源",
      "办公效率",
      "英文写作",
      "语法检查",
      "AI工具",
      "写作助手",
      "语言学习"
    ]
  },
  {
    "name": "WantWords",
    "url": "https://wantwords.net",
    "tags": [
      "实用工具",
      "办公效率",
      "反向词典",
      "写作辅助",
      "语言查询",
      "AI工具",
      "中英互译"
    ]
  },
  {
    "name": "WantQuotes",
    "url": "https://wantquotes.net/",
    "tags": [
      "实用工具",
      "写作辅助",
      "名言名句",
      "据意查句",
      "查询工具",
      "灵感创作",
      "人工智能工具"
    ]
  },
  {
    "name": "Nbnhhsh",
    "url": "https://lab.magiconch.com/nbnhhsh/",
    "tags": [
      "实用工具",
      "查询工具",
      "互联网黑话",
      "缩写释义",
      "拼音缩写",
      "语言工具",
      "效率提升"
    ]
  },
  {
    "name": "Every Time Zone",
    "url": "https://everytimezone.com/",
    "tags": [
      "实用工具",
      "办公",
      "时区转换",
      "效率提升",
      "世界时间",
      "在线工具",
      "跨国会议",
      "远程办公"
    ]
  },
  {
    "name": "67Tool",
    "url": "https://www.67tool.com/",
    "tags": [
      "在线工具箱",
      "实用工具",
      "PDF工具",
      "图片处理",
      "办公工具",
      "开发者工具",
      "格式转换",
      "效率提升"
    ]
  },
  {
    "name": "Slidesgo",
    "url": "https://slidesgo.com/theme/isometric-proposal",
    "tags": [
      "PPT模板",
      "Google Slides",
      "演示文稿",
      "设计素材",
      "办公工具",
      "免费资源"
    ]
  },
  {
    "name": "EmojiAll",
    "url": "https://www.emojiall.com/zh-hans",
    "tags": [
      "实用工具",
      "Emoji",
      "表情符号",
      "设计素材",
      "办公效率",
      "查询工具"
    ]
  },
  {
    "name": "Pushkeen",
    "url": "https://pushkeen.ai/appstore-icons/8901",
    "tags": [
      "设计资源",
      "图标下载",
      "App Store",
      "效率工具",
      "实用工具",
      "素材获取"
    ]
  },
  {
    "name": "Weiciyun 微词云",
    "url": "https://www.weiciyun.com/",
    "tags": [
      "实用工具",
      "办公效率",
      "文字云生成器",
      "数据可视化",
      "在线设计",
      "艺术设计"
    ]
  },
  {
    "name": "PS Gaoding",
    "url": "https://ps.gaoding.com/#/",
    "tags": [
      "实用工具",
      "办公效率",
      "图片编辑",
      "在线PS",
      "图形设计",
      "设计资源"
    ]
  },
  {
    "name": "Adobe Downloads",
    "url": "http://adobe.v404.cn/adobe/",
    "tags": [
      "实用工具与资源",
      "软件下载",
      "Adobe",
      "设计工具",
      "破解资源",
      "Adobe全家桶"
    ]
  },
  {
    "name": "CPS Check",
    "url": "https://cps-check.com/cn/polling-rate-check",
    "tags": [
      "实用工具",
      "在线工具",
      "硬件测试",
      "鼠标测试",
      "轮询率测试",
      "外设检测",
      "性能测试"
    ]
  },
  {
    "name": "NCM Convert",
    "url": "https://ncm.worthsee.com/site/index",
    "tags": [
      "实用工具",
      "音频转换",
      "在线工具",
      "网易云音乐",
      "格式转换",
      "NCM转MP3"
    ]
  },
  {
    "name": "Suno",
    "url": "https://suno.com/",
    "tags": [
      "创意与黑科技",
      "AI音乐",
      "音乐生成",
      "AIGC",
      "作曲创作"
    ]
  },
  {
    "name": "Stable Diffusion",
    "url": "https://huggingface.co/spaces/stabilityai/stable-diffusion",
    "tags": [
      "人工智能",
      "AI绘画",
      "图像生成",
      "Stable Diffusion",
      "Hugging Face",
      "文生图",
      "创意工具"
    ]
  },
  {
    "name": "ERNIE-ViLG",
    "url": "https://huggingface.co/spaces/PaddlePaddle/ERNIE-ViLG",
    "tags": [
      "AI绘画",
      "文心大模型",
      "百度",
      "文本生成图像",
      "PaddlePaddle",
      "Hugging Face",
      "图像处理",
      "人工智能"
    ]
  },
  {
    "name": "ClipDrop Relight",
    "url": "https://clipdrop.co/relight",
    "tags": [
      "AI工具",
      "图像处理",
      "二次打光",
      "后期修图",
      "设计工具",
      "ClipDrop"
    ]
  },
  {
    "name": "Magic Eraser",
    "url": "https://www.magiceraser.io/",
    "tags": [
      "AI工具",
      "图像处理",
      "图片编辑",
      "消除笔",
      "创意设计",
      "效率工具",
      "黑科技",
      "在线神器"
    ]
  },
  {
    "name": "Remove.bg",
    "url": "https://www.remove.bg/",
    "tags": [
      "AI",
      "抠图",
      "图像处理",
      "背景移除",
      "在线工具",
      "人工智能",
      "设计工具"
    ]
  },
  {
    "name": "Unscreen",
    "url": "https://www.unscreen.com/",
    "tags": [
      "AI视频",
      "视频背景移除",
      "视频处理",
      "AI工具",
      "自动抠图"
    ]
  },
  {
    "name": "Picup",
    "url": "http://www.picup.shop/currencyBatch.html",
    "tags": [
      "AI工具",
      "图像处理",
      "抠图",
      "批量处理",
      "设计助手",
      "生产力工具"
    ]
  },
  {
    "name": "Waifu2x",
    "url": "http://waifu2x.udp.jp/",
    "tags": [
      "AI",
      "图像处理",
      "图片放大",
      "超分辨率",
      "二次元",
      "降噪",
      "工具",
      "深度学习",
      "黑科技"
    ]
  },
  {
    "name": "Illuminarty",
    "url": "https://illuminarty.ai/en/",
    "tags": [
      "AI检测",
      "AIGC识别",
      "图片检测",
      "文本检测",
      "创意与黑科技",
      "人工智能"
    ]
  },
  {
    "name": "Goblin Tools",
    "url": "https://goblin.tools/",
    "tags": [
      "AI生产力工具",
      "任务分解",
      "写作辅助",
      "语气转换",
      "情绪识别",
      "效率工具",
      "神经多样性辅助",
      "生活助手"
    ]
  },
  {
    "name": "Hong AI",
    "url": "https://hong.greatdk.com/",
    "tags": [
      "AI",
      "聊天机器人",
      "角色扮演",
      "哄哄模拟器",
      "情商训练",
      "文字游戏",
      "创意与黑科技"
    ]
  },
  {
    "name": "Calligrapher",
    "url": "https://www.calligrapher.ai/",
    "tags": [
      "人工智能",
      "在线工具",
      "设计工具",
      "手写生成",
      "创意工具",
      "黑科技",
      "字体"
    ]
  },
  {
    "name": "2Zimu",
    "url": "https://2zimu.com/#/",
    "tags": [
      "AI工具",
      "视频处理",
      "自动字幕",
      "视频翻译",
      "语音转文字",
      "创意与黑科技"
    ]
  },
  {
    "name": "Azure TTS",
    "url": "https://azure.microsoft.com/zh-cn/services/cognitive-services/text-to-speech/#overview",
    "tags": [
      "AI",
      "文字转语音",
      "语音合成",
      "Microsoft Azure",
      "TTS",
      "创意与黑科技",
      "生产力工具"
    ]
  },
  {
    "name": "Waifu Labs",
    "url": "https://waifulabs.com/",
    "tags": [
      "AI绘画",
      "二次元",
      "头像生成",
      "人工智能",
      "创意工具",
      "角色设计"
    ]
  },
  {
    "name": "Crypko",
    "url": "https://crypko.ai/#/",
    "tags": [
      "AI绘画",
      "二次元",
      "头像生成",
      "角色设计",
      "人工智能",
      "创意工具"
    ]
  },
  {
    "name": "This X Does Not Exist",
    "url": "https://thisxdoesnotexist.com/",
    "tags": [
      "人工智能",
      "生成式AI",
      "GAN",
      "图像生成",
      "创意工具",
      "黑科技",
      "导航"
    ]
  },
  {
    "name": "PaintsChainer",
    "url": "http://paintschainer.preferred.tech/index_zh.html",
    "tags": [
      "AI",
      "自动上色",
      "图像处理",
      "线稿上色",
      "插画工具",
      "人工智能",
      "绘画工具",
      "设计工具"
    ]
  },
  {
    "name": "Girl Friend Factory",
    "url": "https://hiroshiba.github.io/girl_friend_factory/index.html",
    "tags": [
      "AI绘画",
      "二次元",
      "头像生成",
      "生成器",
      "人工智能",
      "创意工具"
    ]
  },
  {
    "name": "Ostagram",
    "url": "http://www.ostagram.ru/lenta?locale=en",
    "tags": [
      "AI绘画",
      "风格迁移",
      "图像处理",
      "图像合成",
      "创意工具"
    ]
  },
  {
    "name": "Caiyun Dream",
    "url": "http://if.caiyunai.com/dream/#/",
    "tags": [
      "AI写作",
      "文本生成",
      "故事续写",
      "文学创作",
      "创意工具",
      "人工智能"
    ]
  },
  {
    "name": "NVIDIA AI Playground",
    "url": "https://www.nvidia.com/en-us/research/ai-playground/",
    "tags": [
      "人工智能",
      "AI绘画",
      "图像处理",
      "英伟达",
      "创意与黑科技",
      "AI工具",
      "AI演示",
      "音乐生成"
    ]
  },
  {
    "name": "AutoDraw",
    "url": "https://aiexperiments.withgoogle.com/autodraw",
    "tags": [
      "AI绘画",
      "设计工具",
      "Google",
      "图标制作",
      "简笔画",
      "创意工具"
    ]
  },
  {
    "name": "Pingti",
    "url": "https://www.pingti.app/",
    "tags": [
      "AI工具",
      "购物助手",
      "省钱攻略",
      "平替搜索",
      "生活辅助",
      "创意与黑科技"
    ]
  },
  {
    "name": "Fatetell",
    "url": "https://www.fatetell.com/",
    "tags": [
      "创意与黑科技",
      "AI工具",
      "人工智能",
      "算命占卜",
      "玄学",
      "大语言模型",
      "当东方玄学遇到AI大模型（算命图一乐）"
    ]
  },
  {
    "name": "Sketch Metademolab",
    "url": "https://sketch.metademolab.com/canvas",
    "tags": [
      "创意与黑科技",
      "AI工具",
      "人工智能",
      "动画生成",
      "图像处理",
      "角色动画",
      "Meta AI"
    ]
  },
  {
    "name": "SmartMap",
    "url": "https://www.smartmap.space/",
    "tags": [
      "AI",
      "地图",
      "旅游规划",
      "行程规划",
      "人工智能",
      "效率工具",
      "创意工具"
    ]
  },
  {
    "name": "Colourise",
    "url": "https://colourise.sg/",
    "tags": [
      "人工智能",
      "AI",
      "图像处理",
      "照片上色",
      "老照片修复",
      "黑白转彩色",
      "在线工具"
    ]
  },
  {
    "name": "Tuxun 图寻",
    "url": "https://tuxun.fun/",
    "tags": [
      "地理",
      "探索与科普",
      "在线游戏",
      "街景",
      "GeoGuessr",
      "益智"
    ]
  },
  {
    "name": "GeoGuessr",
    "url": "https://geoguessr.com/",
    "tags": [
      "地理",
      "游戏",
      "街景",
      "探索",
      "益智",
      "地图"
    ]
  },
  {
    "name": "Drive & Listen",
    "url": "https://drivenlisten.com/city/#",
    "tags": [
      "旅游",
      "地理",
      "城市风光",
      "电台",
      "放松",
      "沉浸式体验",
      "云游",
      "探索"
    ]
  },
  {
    "name": "AirPano",
    "url": "http://www.airpano.com/",
    "tags": [
      "探索",
      "科普",
      "地理",
      "虚拟旅游",
      "全景摄影",
      "航拍",
      "360度全景",
      "摄影",
      "旅游",
      "风景名胜"
    ]
  },
  {
    "name": "Virtual Basilica",
    "url": "https://virtual.basilicasanpietro.va/en",
    "tags": [
      "虚拟游览",
      "文化遗产",
      "历史",
      "建筑",
      "宗教",
      "梵蒂冈",
      "3D体验"
    ]
  },
  {
    "name": "Virtual Mauritshuis",
    "url": "https://virtual.mauritshuis.nl/index.html?lang=en&startscene=21",
    "tags": [
      "艺术",
      "博物馆",
      "虚拟游览",
      "探索与科普",
      "历史",
      "文化"
    ]
  },
  {
    "name": "Calculating Empires",
    "url": "https://calculatingempires.net/",
    "tags": [
      "历史",
      "技术史",
      "可视化",
      "数据地图",
      "数字人文",
      "科普",
      "社会学",
      "信息图表"
    ]
  },
  {
    "name": "Pudding",
    "url": "https://pudding.cool/",
    "tags": [
      "数据可视化",
      "视觉叙事",
      "数据新闻",
      "探索与科普",
      "文化",
      "创意设计",
      "信息图"
    ]
  },
  {
    "name": "All History 全历史",
    "url": "https://www.allhistory.com/",
    "tags": [
      "历史",
      "地理",
      "百科",
      "科普",
      "人文社科",
      "知识图谱",
      "时间轴",
      "可视化"
    ]
  },
  {
    "name": "Lishichelun",
    "url": "https://www.lishichelun.com/tool",
    "tags": [
      "历史",
      "时间轴",
      "可视化",
      "科普",
      "工具",
      "人物生平"
    ]
  },
  {
    "name": "Timeline of Earth",
    "url": "http://timelineofearth.com/",
    "tags": [
      "科普",
      "地球历史",
      "地质学",
      "生物演化",
      "自然科学",
      "互动年表",
      "数据可视化"
    ]
  },
  {
    "name": "AgeEye",
    "url": "https://www.ageeye.cn/",
    "tags": [
      "历史地图",
      "地理",
      "历史",
      "古地图",
      "探索与科普",
      "知识分享",
      "文化",
      "军事",
      "地图制图",
      "资料库"
    ]
  },
  {
    "name": "BigPixel",
    "url": "https://bigpixel.cn/zh-CN.html",
    "tags": [
      "探索与科普",
      "地理",
      "摄影",
      "全景摄影",
      "亿级像素",
      "城市景观",
      "VR"
    ]
  },
  {
    "name": "Seaside Station",
    "url": "https://seaside-station.com/region/hokkaido/",
    "tags": [
      "日本",
      "铁道",
      "旅游",
      "车站",
      "海景",
      "地理",
      "摄影"
    ]
  },
  {
    "name": "Standard Map",
    "url": "http://bzdt.ch.mnr.gov.cn/index.html",
    "tags": [
      "地理",
      "地图",
      "政务服务",
      "标准地图",
      "科普",
      "自然资源部"
    ]
  },
  {
    "name": "Dayi 大医",
    "url": "https://www.dayi.org.cn/",
    "tags": [
      "医学",
      "健康",
      "科普",
      "医药百科",
      "疾病查询",
      "健康科普"
    ]
  },
  {
    "name": "MSD Manuals",
    "url": "https://www.msdmanuals.com/zh#mission",
    "tags": [
      "医学",
      "健康",
      "诊疗手册",
      "临床参考",
      "科普",
      "疾病百科",
      "权威资源"
    ]
  },
  {
    "name": "MVYXWS",
    "url": "https://www.mvyxws.com/",
    "tags": [
      "医学",
      "健康",
      "科普",
      "视频",
      "医疗知识"
    ]
  },
  {
    "name": "China Judgements Online",
    "url": "https://wenshu.court.gov.cn/#",
    "tags": [
      "法律",
      "裁判文书",
      "司法公开",
      "案例检索",
      "政务服务"
    ]
  },
  {
    "name": "Court Live",
    "url": "http://tingshen.court.gov.cn/",
    "tags": [
      "法律",
      "司法",
      "庭审直播",
      "政务服务",
      "中国庭审公开网",
      "科普"
    ]
  },
  {
    "name": "12348 AI Legal",
    "url": "https://ai.12348.gov.cn/pc/",
    "tags": [
      "法律",
      "AI工具",
      "法律咨询",
      "政府服务",
      "法律意见书",
      "免费工具"
    ]
  },
  {
    "name": "Wikihow",
    "url": "https://zh.wikihow.com/",
    "tags": [
      "生活百科",
      "指南",
      "教程",
      "生活技能",
      "Wiki",
      "DIY",
      "科普"
    ]
  },
  {
    "name": "NLC",
    "url": "http://www.nlc.cn/dsb_zyyfw/gj/gjzyk/",
    "tags": [
      "国家图书馆",
      "古籍",
      "善本",
      "数字化资源",
      "历史文献",
      "文化遗产",
      "学术研究"
    ]
  },
  {
    "name": "Shidianguji",
    "url": "https://www.shidianguji.com/?page_from=bookshelf",
    "tags": [
      "古籍",
      "数字化图书馆",
      "历史",
      "文化",
      "文学",
      "AI辅助",
      "在线文库",
      "免费资源",
      "人文社科",
      "学术研究"
    ]
  },
  {
    "name": "CN-KI",
    "url": "https://www.cn-ki.net/",
    "tags": [
      "iData",
      "学术资源",
      "文献检索",
      "论文下载",
      "科研工具",
      "探索与科普"
    ]
  },
  {
    "name": "ReadPaper",
    "url": "https://readpaper.com/",
    "tags": [
      "科研学术",
      "论文阅读",
      "文献管理",
      "AI工具",
      "效率工具"
    ]
  },
  {
    "name": "WolframAlpha",
    "url": "http://www.wolframalpha.com/",
    "tags": [
      "计算知识引擎",
      "数学",
      "科学",
      "学术工具",
      "搜索引擎",
      "数据查询",
      "科普",
      "教育",
      "地理",
      "历史",
      "医学"
    ]
  },
  {
    "name": "Nova Astrometry",
    "url": "https://nova.astrometry.net/",
    "tags": [
      "天文",
      "星空识别",
      "科普",
      "科研工具",
      "数据处理"
    ]
  },
  {
    "name": "Moon Data",
    "url": "http://moon.bao.ac.cn/mul/index/list",
    "tags": [
      "天文",
      "月球",
      "深空探测",
      "科学数据",
      "探月工程",
      "数据中心"
    ]
  },
  {
    "name": "Eclipse",
    "url": "https://nadc.china-vo.org/eclipse/",
    "tags": [
      "天文",
      "日食",
      "科普",
      "数据查询",
      "工具",
      "地理",
      "历史"
    ]
  },
  {
    "name": "Flash Earth",
    "url": "http://www.flashearth.com/",
    "tags": [
      "探索与科普",
      "地理",
      "地图",
      "卫星地图",
      "实时气象卫星图片",
      "地球观测"
    ]
  },
  {
    "name": "Windy",
    "url": "https://www.windy.com/",
    "tags": [
      "天气预报",
      "气象",
      "地理",
      "数据可视化",
      "科普",
      "专业工具"
    ]
  },
  {
    "name": "Gapminder",
    "url": "https://www.gapminder.org/dollar-street/",
    "tags": [
      "探索与科普",
      "地理",
      "社会科学",
      "数据可视化",
      "生活水平",
      "全球视野"
    ]
  },
  {
    "name": "Visual Capitalist",
    "url": "https://www.visualcapitalist.com/",
    "tags": [
      "数据可视化",
      "信息图表",
      "科普",
      "经济",
      "金融",
      "科技",
      "商业",
      "全球趋势"
    ]
  },
  {
    "name": "Every Second",
    "url": "http://www.everysecond.io/",
    "tags": [
      "探索与科普",
      "数据可视化",
      "实时统计",
      "趣味百科",
      "动态数据"
    ]
  },
  {
    "name": "Vultr Quiz",
    "url": "https://vultr.youmu.moe/quiz/",
    "tags": [
      "探索与科普",
      "地理",
      "中国地图",
      "在线测验",
      "益智游戏"
    ]
  },
  {
    "name": "Spurious Correlations",
    "url": "http://tylervigen.com/spurious-correlations",
    "tags": [
      "科普",
      "统计学",
      "数据可视化",
      "趣味",
      "逻辑",
      "探索"
    ]
  },
  {
    "name": "Internet Map",
    "url": "http://internet-map.net/",
    "tags": [
      "互联网",
      "数据可视化",
      "科普",
      "互联网地图",
      "信息技术",
      "探索"
    ]
  },
  {
    "name": "PeakJut",
    "url": "https://peakjut.com/",
    "tags": [
      "地理",
      "山峰",
      "探索与科普",
      "地形",
      "数据可视化",
      "户外"
    ]
  },
  {
    "name": "The Tenth Watch",
    "url": "http://thetenthwatch.com/feed/#",
    "tags": [
      "探索与科普",
      "物理",
      "科学",
      "沥青滴漏实验",
      "实时观测",
      "科学实验"
    ]
  },
  {
    "name": "Cloud Appreciation Society",
    "url": "https://cloudappreciationsociety.org/",
    "tags": [
      "探索与科普",
      "气象",
      "自然",
      "赏云",
      "摄影",
      "科学",
      "天文"
    ]
  },
  {
    "name": "Ian Fisher",
    "url": "https://www.ianfisherart.com/",
    "tags": [
      "艺术",
      "绘画",
      "云",
      "作品集",
      "当代艺术",
      "油画"
    ]
  },
  {
    "name": "Tingdong 听懂",
    "url": "https://tingdong.cn/",
    "tags": [
      "音乐",
      "白噪音",
      "声效",
      "播客",
      "环境音",
      "云试听",
      "音频设备",
      "麦克风",
      "音箱",
      "Hi-Fi"
    ]
  },
  {
    "name": "Listen 1",
    "url": "http://listen1.github.io/listen1/",
    "tags": [
      "音乐",
      "播放器",
      "音乐聚合",
      "开源",
      "工具"
    ]
  },
  {
    "name": "Songsterr",
    "url": "https://www.songsterr.com/",
    "tags": [
      "音乐",
      "吉他谱",
      "贝斯谱",
      "鼓谱",
      "乐谱",
      "在线工具",
      "乐器练习",
      "互动乐谱"
    ]
  },
  {
    "name": "Conserve the Sound",
    "url": "https://www.conservethesound.de/",
    "tags": [
      "声音博物馆",
      "音效素材",
      "复古",
      "白噪音",
      "声音存档",
      "历史保护",
      "环境音",
      "工业设计"
    ]
  },
  {
    "name": "Aporee",
    "url": "https://aporee.org/maps/",
    "tags": [
      "声音地图",
      "田野录音",
      "环境音",
      "音频资源",
      "地理",
      "全球声音",
      "现场录音"
    ]
  },
  {
    "name": "Tree.fm",
    "url": "https://www.tree.fm/",
    "tags": [
      "自然",
      "森林",
      "环境音",
      "白噪音",
      "放松",
      "专注",
      "声景"
    ]
  },
  {
    "name": "Virtocean",
    "url": "https://virtocean.com/#",
    "tags": [
      "音乐与白噪音",
      "环境音",
      "白噪音",
      "海洋",
      "放松",
      "专注",
      "生产力工具",
      "冥想"
    ]
  },
  {
    "name": "Pluvior",
    "url": "https://pluvior.com/index.html",
    "tags": [
      "音乐",
      "白噪音",
      "环境音",
      "雨声",
      "专注",
      "放松",
      "声效",
      "生产力工具"
    ]
  },
  {
    "name": "Rainy Mood",
    "url": "http://www.rainymood.com/",
    "tags": [
      "白噪音",
      "环境音",
      "助眠",
      "学习",
      "专注",
      "放松",
      "雨声",
      "效率工具",
      "背景音"
    ]
  },
  {
    "name": "Ambient Mixer",
    "url": "http://www.ambient-mixer.com/",
    "tags": [
      "环境音",
      "白噪音",
      "声效",
      "在线混音",
      "放松",
      "冥想",
      "专注",
      "RPG背景音"
    ]
  },
  {
    "name": "A Soft Murmur",
    "url": "http://asoftmurmur.com/",
    "tags": [
      "白噪音",
      "环境音",
      "专注",
      "生产力",
      "放松",
      "在线工具",
      "睡眠",
      "冥想"
    ]
  },
  {
    "name": "I Miss The Office",
    "url": "https://imisstheoffice.eu/",
    "tags": [
      "白噪音",
      "环境音",
      "办公室",
      "声效",
      "生产力工具",
      "趣味网站"
    ]
  },
  {
    "name": "Radio Garden",
    "url": "http://radio.garden/live/tokyo/j-idols-project-radio/",
    "tags": [
      "音乐",
      "电台",
      "全球广播",
      "在线工具",
      "探索",
      "播客",
      "日本音乐"
    ]
  },
  {
    "name": "Pod Link",
    "url": "https://pod.link/",
    "tags": [
      "播客",
      "播客分享",
      "聚合链接",
      "社交分享",
      "工具"
    ]
  },
  {
    "name": "Epidemic Sound",
    "url": "https://www.epidemicsound.com/",
    "tags": [
      "音乐",
      "音效",
      "免版税",
      "内容创作",
      "素材库",
      "音频",
      "视频剪辑"
    ]
  },
  {
    "name": "No Copyright Music",
    "url": "https://www.youtube.com/channel/UCht8qITGkBvXKsR1Byln-wA/videos",
    "tags": [
      "音乐",
      "无版权音乐",
      "YouTube",
      "免版税音乐",
      "BGM",
      "素材库",
      "内容创作"
    ]
  },
  {
    "name": "Sonniss",
    "url": "http://www.sonniss.com/gameaudiogdc2017/",
    "tags": [
      "音效素材",
      "游戏音频",
      "免费资源",
      "创作素材",
      "GDC",
      "音频素材"
    ]
  },
  {
    "name": "BBDJ",
    "url": "http://www.bbdj.com/",
    "tags": [
      "音乐",
      "DJ",
      "舞曲",
      "电音",
      "无损音乐",
      "串烧",
      "音乐分享"
    ]
  },
  {
    "name": "Ishkur's Guide",
    "url": "http://music.ishkur.com/",
    "tags": [
      "音乐",
      "电子音乐",
      "音乐历史",
      "流派图谱",
      "音乐科普",
      "编年史",
      "交互式网页",
      "音乐欣赏"
    ]
  },
  {
    "name": "Traxsource",
    "url": "https://www.traxsource.com/dj-top-10s",
    "tags": [
      "音乐",
      "电子音乐",
      "House Music",
      "DJ 资源",
      "排行榜",
      "数字音乐商店"
    ]
  },
  {
    "name": "BGMC Station",
    "url": "https://bgmc-station.com/",
    "tags": [
      "音乐",
      "背景音乐",
      "BGM",
      "免版权音乐",
      "商业用曲",
      "店铺音乐",
      "环境音",
      "白噪音"
    ]
  },
  {
    "name": "TuneFind",
    "url": "https://www.tunefind.com/",
    "tags": [
      "音乐",
      "影视插曲",
      "原声带",
      "OST",
      "美剧",
      "电影",
      "音乐发现"
    ]
  },
  {
    "name": "Gnoosic",
    "url": "https://www.gnoosic.com/faves.php",
    "tags": [
      "音乐",
      "音乐发现",
      "音乐推荐",
      "个性化推荐",
      "发现工具"
    ]
  },
  {
    "name": "Lalal.ai",
    "url": "https://www.lalal.ai/",
    "tags": [
      "音乐",
      "音频编辑",
      "人工智能",
      "AI工具",
      "人声分离",
      "伴奏提取",
      "音频处理"
    ]
  },
  {
    "name": "Dango.ai",
    "url": "https://dango.ai/",
    "tags": [
      "AI音频工具",
      "人声分离",
      "音频分轨",
      "音乐制作",
      "伴奏提取",
      "AI工具"
    ]
  },
  {
    "name": "The Wub Machine",
    "url": "https://the.wubmachine.com/",
    "tags": [
      "音乐",
      "音频处理",
      "混音",
      "自动Remix",
      "在线工具",
      "电子音乐"
    ]
  },
  {
    "name": "Learning Music",
    "url": "https://learningmusic.ableton.com/zh-Hans/",
    "tags": [
      "音乐教育",
      "音乐创作",
      "乐理",
      "Ableton",
      "交互式教程",
      "在线学习"
    ]
  },
  {
    "name": "Flowkey",
    "url": "https://app.flowkey.com.cn/",
    "tags": [
      "钢琴",
      "音乐教育",
      "乐器学习",
      "在线学习",
      "音乐"
    ]
  },
  {
    "name": "Touch Pianist",
    "url": "http://touchpianist.com/",
    "tags": [
      "音乐",
      "钢琴",
      "节奏游戏",
      "古典音乐",
      "在线游戏",
      "交互式体验"
    ]
  },
  {
    "name": "Hmix",
    "url": "http://www.hmix.net/music_gallery/music_top.htm",
    "tags": [
      "音乐素材",
      "BGM",
      "音效",
      "免版权音乐",
      "日本",
      "免费资源",
      "素材库",
      "游戏素材",
      "视频剪辑素材"
    ]
  },
  {
    "name": "Downloads Khinsider",
    "url": "https://downloads.khinsider.com/",
    "tags": [
      "音乐",
      "游戏音乐",
      "OST",
      "原声带",
      "下载站",
      "游戏资源",
      "素材下载"
    ]
  },
  {
    "name": "Slow Roads",
    "url": "https://slowroads.io/",
    "tags": [
      "游戏",
      "网页游戏",
      "驾驶模拟",
      "休闲解压",
      "3D",
      "程序化生成"
    ]
  },
  {
    "name": "Sandtris",
    "url": "https://sandtris.com/",
    "tags": [
      "游戏",
      "网页游戏",
      "俄罗斯方块",
      "物理模拟",
      "益智",
      "解压",
      "休闲"
    ]
  },
  {
    "name": "Webamp",
    "url": "https://webamp.org/",
    "tags": [
      "音乐播放器",
      "网页工具",
      "复古",
      "交互体验",
      "开源",
      "在线多媒体",
      "Winamp"
    ]
  },
  {
    "name": "Nyan Cat",
    "url": "https://www.nyan.cat/",
    "tags": [
      "互联网迷因",
      "网页艺术",
      "像素风",
      "解压",
      "趣味交互",
      "网页游戏",
      "经典网站",
      "彩虹猫"
    ]
  },
  {
    "name": "Bongo Cat",
    "url": "https://bongo.cat/",
    "tags": [
      "网页游戏",
      "音乐",
      "乐器",
      "趣味交互",
      "解压",
      "休闲",
      "游戏与互动"
    ]
  },
  {
    "name": "Pointer Pointer",
    "url": "https://pointerpointer.com/",
    "tags": [
      "互动",
      "网页游戏",
      "趣味交互",
      "解压",
      "创意",
      "无用网站"
    ]
  },
  {
    "name": "The Useless Web",
    "url": "http://www.theuselessweb.com/",
    "tags": [
      "趣味",
      "随机网站",
      "创意网页",
      "解压",
      "娱乐",
      "互动",
      "发现"
    ]
  },
  {
    "name": "Watabou",
    "url": "https://watabou.github.io/",
    "tags": [
      "地图生成",
      "跑团工具",
      "过程生成",
      "创意工具",
      "游戏工具",
      "奇幻设定",
      "可视化"
    ]
  },
  {
    "name": "Azgaar",
    "url": "https://azgaar.github.io/Fantasy-Map-Generator/",
    "tags": [
      "工具",
      "地图生成",
      "奇幻",
      "世界观设定",
      "RPG资源",
      "生成器",
      "设计工具"
    ]
  },
  {
    "name": "Rooms.xyz",
    "url": "https://rooms.xyz/",
    "tags": [
      "游戏与互动",
      "网页游戏",
      "3D创作",
      "沙盒",
      "体素",
      "创意工具",
      "像素风",
      "空间设计",
      "趣味交互",
      "解压"
    ]
  },
  {
    "name": "Guivo",
    "url": "https://guivo.io/#/play-tutorial",
    "tags": [
      "游戏",
      "网页游戏",
      "三消",
      "益智",
      "竞技",
      "解压",
      "排位赛",
      "ELO机制"
    ]
  },
  {
    "name": "Chess.com",
    "url": "https://www.chess.com/",
    "tags": [
      "国际象棋",
      "棋牌游戏",
      "在线对战",
      "网页游戏",
      "策略游戏",
      "学习与教育",
      "游戏与互动"
    ]
  },
  {
    "name": "Guess The Pin",
    "url": "https://www.guessthepin.com/",
    "tags": [
      "网页游戏",
      "游戏与互动",
      "益智解谜",
      "在线协作",
      "趣味交互",
      "解压"
    ]
  },
  {
    "name": "Guess The Price",
    "url": "https://guesstheprice.net/",
    "tags": [
      "网页游戏",
      "休闲游戏",
      "益智",
      "价格猜测",
      "趣味交互"
    ]
  },
  {
    "name": "TypeRacer",
    "url": "https://play.typeracer.com/",
    "tags": [
      "网页游戏",
      "打字练习",
      "打字比赛",
      "在线竞技",
      "休闲解压",
      "游戏与互动",
      "教育工具"
    ]
  },
  {
    "name": "Vampire Survivors",
    "url": "https://poncle.itch.io/vampire-survivors",
    "tags": [
      "游戏与互动",
      "网页游戏、趣味交互与解压",
      "吸血鬼幸存者网页版，非常上头的刷怪游戏。"
    ]
  },
  {
    "name": "Maj-Soul",
    "url": "https://www.maj-soul.com/#/home",
    "tags": [
      "游戏",
      "网页游戏",
      "雀魂",
      "麻将",
      "日麻"
    ]
  },
  {
    "name": "Taiko Simulator",
    "url": "https://tg.lv5.ac",
    "tags": [
      "游戏",
      "网页游戏",
      "音游",
      "节奏游戏",
      "太鼓达人",
      "模拟器",
      "休闲娱乐",
      "交互体验"
    ]
  },
  {
    "name": "Melody Muncher",
    "url": "http://ddrkirby.com/games/melody-muncher/melody-muncher.html",
    "tags": [
      "游戏",
      "网页游戏",
      "音乐游戏",
      "节奏游戏",
      "独立游戏",
      "休闲",
      "解压",
      "像素风",
      "Melody Muncher"
    ]
  },
  {
    "name": "BeatStage",
    "url": "http://www.beatstage.com/",
    "tags": [
      "游戏与互动",
      "网页游戏",
      "音乐游戏",
      "音游",
      "节奏游戏",
      "开放式网页音乐游戏",
      "在线娱乐",
      "趣味交互"
    ]
  },
  {
    "name": "Temple Run",
    "url": "https://pos.biborg.com/fr/",
    "tags": [
      "游戏",
      "网页游戏",
      "跑酷游戏",
      "神庙逃亡",
      "休闲解压",
      "互动体验"
    ]
  },
  {
    "name": "Jazz vs Waffles",
    "url": "https://www.jazzvswaffles.com/",
    "tags": [
      "游戏",
      "网页游戏",
      "人工智能",
      "AI应用",
      "角色PK",
      "模拟器",
      "互动娱乐",
      "趣味解压"
    ]
  },
  {
    "name": "Retryables",
    "url": "https://retryables.com/",
    "tags": [
      "游戏与互动",
      "网页游戏",
      "趣味交互",
      "解压",
      "创意游戏",
      "极简",
      "休闲游戏",
      "独立游戏"
    ]
  },
  {
    "name": "Noclip",
    "url": "https://noclip.website/",
    "tags": [
      "游戏与互动",
      "网页游戏",
      "趣味交互",
      "地图博物馆",
      "关卡设计",
      "经典游戏",
      "复古游戏",
      "3D展示",
      "WebGL",
      "数字存档"
    ]
  },
  {
    "name": "Flashpoint",
    "url": "https://bluemaxima.org/flashpoint/",
    "tags": [
      "游戏保存",
      "Flash游戏",
      "网页游戏",
      "数字档案馆",
      "怀旧游戏",
      "软件工具",
      "开源项目"
    ]
  },
  {
    "name": "How Long To Beat",
    "url": "https://howlongtobeat.com/",
    "tags": [
      "游戏",
      "游戏工具",
      "数据查询",
      "通关时长",
      "游戏数据库"
    ]
  },
  {
    "name": "Indie Expo",
    "url": "https://www.indiexpo.net/",
    "tags": [
      "独立游戏",
      "游戏平台",
      "网页游戏",
      "免费游戏",
      "游戏社区",
      "游戏与互动",
      "独立游戏集合站"
    ]
  },
  {
    "name": "User Inyerface",
    "url": "https://userinyerface.com/game.html",
    "tags": [
      "网页游戏",
      "UI设计",
      "UX设计",
      "交互设计",
      "反面教材",
      "趣味实验",
      "用户体验",
      "创意设计"
    ]
  },
  {
    "name": "Life Restart",
    "url": "http://liferestart.syaro.io/view/index.html",
    "tags": [
      "网页游戏",
      "人生重开模拟器",
      "模拟器",
      "文字游戏",
      "趣味交互",
      "解压",
      "休闲娱乐"
    ]
  },
  {
    "name": "Nazo",
    "url": "http://nazo.one-story.cn/",
    "tags": [
      "游戏",
      "网页游戏",
      "解谜",
      "益智",
      "脑洞",
      "闯关",
      "互动"
    ]
  },
  {
    "name": "Gravity Points",
    "url": "https://codepen.io/akm2/full/rHIsa",
    "tags": [
      "互动交互",
      "网页游戏",
      "物理模拟",
      "CodePen",
      "创意编程",
      "Canvas",
      "JavaScript",
      "解压",
      "视觉艺术"
    ]
  },
  {
    "name": "Sharkle",
    "url": "https://sharkle.com/",
    "tags": [
      "游戏与互动",
      "网页游戏",
      "趣味交互",
      "解压",
      "创意网站",
      "随机跳转",
      "网页艺术",
      "实验性网页"
    ]
  },
  {
    "name": "Patatap",
    "url": "https://patatap.com/",
    "tags": [
      "互动体验",
      "网页游戏",
      "解压",
      "音乐",
      "视听艺术",
      "动画",
      "趣味交互"
    ]
  },
  {
    "name": "Weave Silk",
    "url": "http://weavesilk.com/",
    "tags": [
      "生成艺术",
      "互动艺术",
      "网页游戏",
      "解压",
      "绘画工具",
      "对称美学",
      "创意实验"
    ]
  },
  {
    "name": "Water Effect",
    "url": "http://watereffect.net/index.php",
    "tags": [
      "图像处理",
      "动画制作",
      "水波纹效果",
      "在线工具",
      "图片特效",
      "视觉设计",
      "趣味交互"
    ]
  },
  {
    "name": "Spin Painter",
    "url": "http://mrdoob.com/#/157/spin_painter",
    "tags": [
      "交互艺术",
      "网页游戏",
      "解压",
      "旋转绘画",
      "绘画工具",
      "视觉实验",
      "创意工具"
    ]
  },
  {
    "name": "Solitaire?",
    "url": "https://www.google.com/search?q=http://mrdoob.com/lab/javascript/effects/solitaire/%3Furl_type%3D39%26object_type%3Dwebpage%26pos%3D1",
    "tags": [
      "游戏与互动",
      "网页特效",
      "趣味交互",
      "解压",
      "JavaScript",
      "创意网页",
      "视觉艺术"
    ]
  },
  {
    "name": "Ro.me",
    "url": "http://www.ro.me/",
    "tags": [
      "游戏与互动",
      "互动式Web实验",
      "WebGL",
      "交互式音乐录像带",
      "Chrome Experiments",
      "3D网页",
      "创意编程",
      "趣味交互"
    ]
  },
  {
    "name": "Plant Trees",
    "url": "http://fff.cmiscm.com/#!/section/planttrees",
    "tags": [
      "游戏与互动",
      "网页游戏",
      "趣味交互",
      "解压",
      "种树交互艺术",
      "Form Follows Function",
      "创意编程",
      "生成艺术",
      "HTML5",
      "视觉实验"
    ]
  },
  {
    "name": "Paper Planes",
    "url": "https://landing.adobe.com/en/na/products/creative-cloud/69308-real-or-photoshop/index.html",
    "tags": [
      "Adobe",
      "网页游戏",
      "互动体验",
      "测验",
      "图像处理",
      "视觉挑战",
      "趣味交互"
    ]
  },
  {
    "name": "ISS Sim",
    "url": "https://iss-sim.spacex.com/",
    "tags": [
      "网页游戏",
      "模拟器",
      "SpaceX",
      "航天",
      "科普",
      "国际空间站",
      "互动体验",
      "游戏与互动"
    ]
  },
  {
    "name": "Human Benchmark",
    "url": "https://humanbenchmark.com/",
    "tags": [
      "网页游戏",
      "脑力测试",
      "反应速度",
      "记忆力测试",
      "认知评估",
      "趣味交互",
      "基准测试"
    ]
  },
  {
    "name": "Make A Deck",
    "url": "https://www.me.uk/cards/makeadeck.cgi",
    "tags": [
      "游戏工具",
      "在线工具",
      "扑克牌",
      "卡牌生成器",
      "趣味交互",
      "设计工具"
    ]
  },
  {
    "name": "Neave",
    "url": "https://neave.com/",
    "tags": [
      "游戏",
      "网页游戏",
      "互动体验",
      "解压",
      "小游戏集合",
      "趣味应用",
      "创意设计",
      "实验艺术"
    ]
  },
  {
    "name": "Resn",
    "url": "https://resn.co.nz/#",
    "tags": [
      "创意设计",
      "交互设计",
      "WebGL",
      "数字创意代理商",
      "3D 交互",
      "网页灵感",
      "特效展示",
      "Awwwards"
    ]
  },
  {
    "name": "Anitabi",
    "url": "https://anitabi.cn/map",
    "tags": [
      "二次元",
      "动漫",
      "圣地巡礼",
      "地图工具",
      "旅游",
      "亚文化",
      "泛娱乐"
    ]
  },
  {
    "name": "I Event",
    "url": "https://ievent.life/",
    "tags": [
      "二次元",
      "线下活动",
      "地下偶像",
      "Live",
      "VTuber",
      "声优",
      "动漫",
      "资讯站",
      "泛娱乐",
      "演出信息",
      "亚文化"
    ]
  },
  {
    "name": "VTBS",
    "url": "https://vtbs.moe/",
    "tags": [
      "二次元",
      "虚拟主播",
      "Vtuber",
      "数据分析",
      "数据统计",
      "Bilibili",
      "泛娱乐",
      "亚文化",
      "工具"
    ]
  },
  {
    "name": "Ymgal",
    "url": "https://www.ymgal.games",
    "tags": [
      "Galgame",
      "视觉小说",
      "二次元",
      "游戏社区",
      "游戏点评",
      "游戏数据库"
    ]
  },
  {
    "name": "Miku Tools",
    "url": "https://tools.miku.ac/",
    "tags": [
      "在线工具",
      "多功能工具箱",
      "二次元",
      "初音未来",
      "视频下载",
      "图片处理",
      "效率工具",
      "网页应用"
    ]
  },
  {
    "name": "Picrew",
    "url": "https://picrew.me/",
    "tags": [
      "二次元",
      "动漫",
      "亚文化",
      "捏人",
      "头像制作",
      "角色创建",
      "在线工具",
      "设计素材"
    ]
  },
  {
    "name": "ShindanMaker",
    "url": "https://shindanmaker.com/1064580",
    "tags": [
      "二次元与泛娱乐",
      "动漫、影视、虚拟主播与亚文化",
      "趣味诊断生成器",
      "Fate系列",
      "在线工具",
      "ACG资源",
      "令咒生成"
    ]
  },
  {
    "name": "Trace Moe",
    "url": "https://trace.moe/",
    "tags": [
      "二次元",
      "动漫",
      "搜番",
      "以图搜番",
      "搜索引擎",
      "在线工具",
      "ACG",
      "截图识别",
      "[可疑链接已删除]()",
      "二次元",
      "动漫",
      "插画",
      "搜图",
      "聚合搜索",
      "工具",
      "亚文化",
      "泛娱乐"
    ]
  },
  {
    "name": "SauceNAO",
    "url": "http://saucenao.com/index.php",
    "tags": [
      "二次元",
      "动漫",
      "以图搜图",
      "图片搜索",
      "搜索引擎",
      "工具",
      "逆向搜索",
      "插画溯源"
    ]
  },
  {
    "name": "Anime Pictures",
    "url": "https://anime-pictures.net/",
    "tags": [
      "二次元",
      "动漫",
      "壁纸",
      "插画",
      "图库",
      "高清图片",
      "视觉艺术"
    ]
  },
  {
    "name": "Lab Magiconch",
    "url": "https://lab.magiconch.com/homo/",
    "tags": [
      "二次元与泛娱乐",
      "亚文化",
      "恶臭数字论证器",
      "在线工具",
      "生成器",
      "梗"
    ]
  },
  {
    "name": "Vaporwave",
    "url": "https://lab.magiconch.com/vaporwave/?from=home",
    "tags": [
      "图片处理",
      "在线工具",
      "蒸汽波",
      "复古风",
      "滤镜",
      "亚文化",
      "设计工具",
      "艺术创作",
      "神奇海螺试验场"
    ]
  },
  {
    "name": "Thug Life",
    "url": "http://www.pngall.com/thug-life-png",
    "tags": [
      "设计素材",
      "PNG图片",
      "迷因文化",
      "Thug Life",
      "亚文化",
      "透明背景素材",
      "泛娱乐"
    ]
  },
  {
    "name": "Mix Emoji",
    "url": "https://tikolu.net/",
    "tags": [
      "在线工具",
      "Emoji",
      "表情包",
      "创意工具",
      "休闲娱乐"
    ]
  },
  {
    "name": "Halfne Miku",
    "url": "http://johnsu.deviantart.com/art/Halfne-Miku-Studio-396850314",
    "tags": [
      "二次元与泛娱乐",
      "动漫、影视、虚拟主播与亚文化",
      "初音未来",
      "VOCALOID",
      "Flash 游戏",
      "互动媒体",
      "DeviantArt",
      "换装游戏",
      "同人创作"
    ]
  },
  {
    "name": "Leptc",
    "url": "https://leptc.github.io/bili/",
    "tags": [
      "B站",
      "数据统计",
      "排行榜",
      "粉丝追踪",
      "工具",
      "二次元",
      "泛娱乐"
    ]
  },
  {
    "name": "Date Night Movies",
    "url": "https://datenightmovies.com/",
    "tags": [
      "影视",
      "电影推荐",
      "在线工具",
      "生活工具",
      "决策辅助"
    ]
  },
  {
    "name": "IMP Awards",
    "url": "http://www.impawards.com/",
    "tags": [
      "影视",
      "海报",
      "设计",
      "素材",
      "电影海报"
    ]
  },
  {
    "name": "Autum",
    "url": "https://autum.com/",
    "tags": [
      "二次元",
      "泛娱乐",
      "动漫",
      "影视",
      "影视统计",
      "观影记录",
      "数据分析",
      "媒体追踪"
    ]
  },
  {
    "name": "The Song Painted Nature",
    "url": "https://news.cgtn.com/event/2023/The-Song-Painted-Nature/index.html",
    "tags": [
      "艺术",
      "文化",
      "宋代",
      "国画",
      "数字展览",
      "交互体验",
      "CGTN",
      "历史"
    ]
  },
  {
    "name": "VV语录",
    "url": "https://vv.cicada000.work/",
    "tags": [
      "虚拟主播",
      "VTuber",
      "二次元",
      "语录",
      "数据库",
      "检索工具",
      "亚文化"
    ]
  },
  {
    "name": "SMZDM 什么值得买",
    "url": "http://www.smzdm.com/",
    "tags": [
      "购物",
      "优惠",
      "测评",
      "生活",
      "消费",
      "导购",
      "折扣",
      "电商"
    ]
  },
  {
    "name": "Maigoo",
    "url": "https://www.maigoo.com/",
    "tags": [
      "品牌排行",
      "购物指南",
      "消费百科",
      "生活服务",
      "行业研究",
      "商业资讯"
    ]
  },
  {
    "name": "Product Hunt",
    "url": "https://www.producthunt.com/",
    "tags": [
      "科技",
      "创业",
      "产品",
      "工具",
      "软件",
      "互联网"
    ]
  },
  {
    "name": "IT Juzi",
    "url": "https://www.itjuzi.com/deathCompany",
    "tags": [
      "商业",
      "创业",
      "互联网",
      "数据分析",
      "投融资",
      "行业观察",
      "案例分析"
    ]
  },
  {
    "name": "StartZone",
    "url": "https://startzone.club/",
    "tags": [
      "商业",
      "初创公司",
      "盈利统计",
      "独立开发",
      "SaaS",
      "项目灵感",
      "案例分析"
    ]
  },
  {
    "name": "Fiverr",
    "url": "https://www.fiverr.com/",
    "tags": [
      "自由职业",
      "商业服务",
      "外包",
      "职场工具",
      "数字服务",
      "兼职招聘",
      "灵活用工"
    ]
  },
  {
    "name": "1688",
    "url": "https://www.1688.com/",
    "tags": [
      "购物",
      "批发",
      "采购",
      "B2B",
      "电商",
      "阿里巴巴"
    ]
  },
  {
    "name": "Taobao Auction",
    "url": "https://sf.taobao.com/",
    "tags": [
      "生活与消费",
      "购物",
      "拍卖",
      "司法拍卖",
      "商业",
      "阿里巴巴",
      "资产处置",
      "金融"
    ]
  },
  {
    "name": "JD Auction",
    "url": "http://auction.jd.com/haiguan.html",
    "tags": [
      "生活与消费",
      "购物",
      "电商",
      "拍卖",
      "京东",
      "海关拍卖",
      "政府拍卖",
      "资产处置"
    ]
  },
  {
    "name": "Chiphell",
    "url": "http://www.chiphell.com/",
    "tags": [
      "电脑硬件",
      "数码",
      "生活方式",
      "发烧友",
      "评测",
      "论坛",
      "极客",
      "摄影"
    ]
  },
  {
    "name": "Wooden Ears",
    "url": "https://www.woodenears.com/",
    "tags": [
      "数码",
      "耳机",
      "音频设备",
      "评测",
      "参数对比",
      "选购指南",
      "生活与消费"
    ]
  },
  {
    "name": "DXOMARK",
    "url": "https://www.dxomark.com/",
    "tags": [
      "科技",
      "数码",
      "硬件评测",
      "基准测试",
      "智能手机",
      "摄影摄像",
      "消费电子",
      "屏幕音频"
    ]
  },
  {
    "name": "Samyang Lens",
    "url": "https://www.samyanglens.com/en/product/simulator/lens.php",
    "tags": [
      "摄影",
      "镜头模拟器",
      "摄影工具",
      "光学科普",
      "焦段演示"
    ]
  },
  {
    "name": "WTFSIGFD",
    "url": "https://wtfsigfd.com/#location",
    "tags": [
      "饮食",
      "生活",
      "工具",
      "决策辅助",
      "随机推荐"
    ]
  },
  {
    "name": "Cook Yunyoujun",
    "url": "https://cook.yunyoujun.cn/",
    "tags": [
      "生活",
      "饮食",
      "烹饪",
      "菜谱",
      "工具",
      "在线工具"
    ]
  },
  {
    "name": "FatSecret",
    "url": "https://www.fatsecret.cn/%E7%83%AD%E9%87%8F%E8%90%A5%E5%85%BB/",
    "tags": [
      "生活",
      "饮食",
      "健康",
      "营养",
      "健身",
      "工具",
      "卡路里"
    ]
  },
  {
    "name": "Muscle Wiki",
    "url": "https://musclewiki.com/",
    "tags": [
      "健身",
      "运动",
      "健康",
      "生活",
      "工具",
      "教学"
    ]
  },
  {
    "name": "Tianxun 天巡",
    "url": "https://www.tianxun.com/",
    "tags": [
      "旅游",
      "机票",
      "酒店",
      "出行",
      "搜索",
      "比价",
      "生活"
    ]
  },
  {
    "name": "Eshow365",
    "url": "http://www.eshow365.com/",
    "tags": [
      "会展",
      "商业",
      "贸易",
      "行业资讯",
      "信息门户"
    ]
  },
  {
    "name": "Liangcang 良仓",
    "url": "http://www.iliangcang.com/i/home/",
    "tags": [
      "生活美学",
      "创意设计",
      "家居",
      "生活方式",
      "在线购物",
      "艺术"
    ]
  },
  {
    "name": "MTM Wood",
    "url": "http://mtmwood.com/en",
    "tags": [
      "生活与消费",
      "购物",
      "家居",
      "厨具",
      "木工",
      "手工",
      "艺术"
    ]
  },
  {
    "name": "Kongfz 孔夫子旧书网",
    "url": "https://www.kongfz.com/",
    "tags": [
      "生活与消费",
      "购物",
      "旧书",
      "图书",
      "文化",
      "二手交易",
      "收藏",
      "电商"
    ]
  },
  {
    "name": "MihuaShi 米画师",
    "url": "https://www.mihuashi.com/artists",
    "tags": [
      "设计与艺术",
      "美术外包",
      "交易平台",
      "约稿",
      "商业服务",
      "插画",
      "自由职业"
    ]
  },
  {
    "name": "Kaola Media",
    "url": "https://www.kaolamedia.com/",
    "tags": [
      "新媒体工具",
      "新媒体导航",
      "运营素材",
      "素材资源",
      "新媒体人工具箱",
      "内容创作"
    ]
  },
  {
    "name": "MJ Yuzhua",
    "url": "https://mj.yuzhua.com/search/3.html",
    "tags": [
      "商业服务",
      "新媒体",
      "账号交易",
      "数字资产",
      "虚拟资产交易",
      "营销工具"
    ]
  },
  {
    "name": "Yume",
    "url": "http://yume.ly/",
    "tags": [
      "社交",
      "社区",
      "梦境",
      "日记",
      "记录",
      "梦乡"
    ]
  },
  {
    "name": "Soul Apartment",
    "url": "http://soulapartment.net/bin/index.php",
    "tags": [
      "社交",
      "社区",
      "匿名",
      "树洞",
      "秘密分享"
    ]
  },
  {
    "name": "ShuShuBuYue",
    "url": "http://www.shushubuyue.net/#",
    "tags": [
      "社交",
      "匿名聊天",
      "在线聊天",
      "交友"
    ]
  },
  {
    "name": "Drrr",
    "url": "http://drrr.com/lounge",
    "tags": [
      "社交",
      "聊天室",
      "匿名",
      "ACG",
      "无头骑士异闻录",
      "社区"
    ]
  },
  {
    "name": "Kook",
    "url": "https://www.kookapp.cn",
    "tags": [
      "社交",
      "游戏",
      "语音",
      "即时通讯",
      "社区",
      "开黑"
    ]
  },
  {
    "name": "Saraba1st",
    "url": "https://bbs.saraba1st.com/2b/space-uid-197835.html",
    "tags": [
      "社交",
      "论坛",
      "社区",
      "Saraba1st",
      "S1",
      "酒店",
      "评测",
      "生活"
    ]
  },
  {
    "name": "TopHub",
    "url": "https://tophub.today/",
    "tags": [
      "今日热榜",
      "信息聚合",
      "热点资讯",
      "导航",
      "新闻"
    ]
  },
  {
    "name": "Houxu 后续",
    "url": "https://houxu.app/",
    "tags": [
      "新闻",
      "事件追踪",
      "资讯",
      "时间轴",
      "媒体"
    ]
  },
  {
    "name": "Bookmark Earth",
    "url": "https://www.bookmarkearth.cn/",
    "tags": [
      "书签管理",
      "资源分享",
      "社区",
      "导航",
      "效率工具",
      "浏览器插件"
    ]
  },
  {
    "name": "YouquHome",
    "url": "http://youquhome.com/page/3/",
    "tags": [
      "导航",
      "趣味网站",
      "酷站",
      "发现",
      "资源"
    ]
  },
  {
    "name": "Ptxz",
    "url": "http://www.ptxz.com/fo/",
    "tags": [
      "工具",
      "在线工具",
      "加密解密",
      "与佛论禅",
      "文本处理",
      "趣味"
    ]
  },
  {
    "name": "YesNo",
    "url": "https://yesno.wtf/",
    "tags": [
      "工具",
      "随机决策",
      "动图",
      "有趣",
      "辅助决策"
    ]
  },
  {
    "name": "Eitheryoulikebacon",
    "url": "https://eitheryoulikebaconoryourewrong.com/",
    "tags": [
      "无聊网站",
      "趣味",
      "培根",
      "单页网站",
      "沙雕网站"
    ]
  },
  {
    "name": "Bacon Or Wrong",
    "url": "https://eitheryoulikebaconoryourewrong.com/",
    "tags": [
      "娱乐",
      "幽默",
      "趣味",
      "创意网站"
    ]
  },
  {
    "name": "PhotoMosh",
    "url": "https://photomosh.com/",
    "tags": [
      "故障艺术",
      "图片处理",
      "在线工具",
      "设计工具",
      "视频特效",
      "创意工具"
    ]
  },
  {
    "name": "KeepScreenOn",
    "url": "https://www.keepscreenon.com/",
    "tags": [
      "工具",
      "在线工具",
      "系统工具",
      "生产力",
      "防止锁屏"
    ]
  },
  {
    "name": "Window Swap",
    "url": "https://window-swap.com/",
    "tags": [
      "云旅游",
      "治愈系",
      "创意",
      "视频",
      "休闲",
      "生活方式"
    ]
  },
  {
    "name": "Spread The Sign",
    "url": "https://www.spreadthesign.com/",
    "tags": [
      "手语",
      "词典",
      "语言学习",
      "教育",
      "无障碍",
      "在线工具",
      "公益"
    ]
  },
  {
    "name": "Which English",
    "url": "http://archive.gameswithwords.org/WhichEnglish/",
    "tags": [
      "英语",
      "语言学习",
      "语言测试",
      "语言学",
      "方言辨析",
      "教育",
      "在线工具"
    ]
  },
  {
    "name": "SpeechAce",
    "url": "https://www.speechace.com/",
    "tags": [
      "语言学习",
      "英语学习",
      "口语练习",
      "AI工具",
      "发音评分"
    ]
  },
  {
    "name": "Behind The Name",
    "url": "https://www.behindthename.com/",
    "tags": [
      "姓名",
      "词源",
      "参考资料",
      "语言",
      "文化",
      "历史",
      "工具"
    ]
  },
  {
    "name": "Merriam-Webster",
    "url": "https://www.merriam-webster.com/",
    "tags": [
      "词典",
      "英语学习",
      "语言工具",
      "韦氏词典",
      "在线学习",
      "单词游戏",
      "参考资料"
    ]
  },
  {
    "name": "Zero To Hero",
    "url": "https://www.zerotohero.ca/",
    "tags": [
      "语言学习",
      "在线教育",
      "视频学习",
      "学习工具",
      "AI工具"
    ]
  },
  {
    "name": "Forvo",
    "url": "https://zh.forvo.com/user/hikari1/pronounced-words/page-2/",
    "tags": [
      "语言学习",
      "发音",
      "词典",
      "在线工具",
      "教育",
      "母语发音"
    ]
  },
  {
    "name": "Coursera",
    "url": "https://www.coursera.org/",
    "tags": [
      "教育",
      "在线教育",
      "公开课",
      "MOOC",
      "学习",
      "职业培训"
    ]
  },
  {
    "name": "ICourse163",
    "url": "https://www.icourse163.org/",
    "tags": [
      "教育",
      "学习",
      "在线教育",
      "MOOC",
      "中国大学MOOC",
      "国家精品课程"
    ]
  },
  {
    "name": "WuxiaWorld",
    "url": "http://www.wuxiaworld.com/",
    "tags": [
      "小说",
      "网文",
      "翻译",
      "阅读",
      "文学",
      "仙侠",
      "英文",
      "社区"
    ]
  },
  {
    "name": "Z-Lib",
    "url": "https://z-lib.org/",
    "tags": [
      "电子书",
      "资源",
      "学术",
      "文献",
      "图书馆"
    ]
  },
  {
    "name": "Wix",
    "url": "https://www.wix.com/",
    "tags": [
      "建站工具",
      "零代码",
      "开发工具",
      "设计工具",
      "SaaS"
    ]
  },
  {
    "name": "OSR",
    "url": "https://osr.org/",
    "tags": [
      "礼物",
      "天文",
      "星星命名",
      "创意礼物",
      "在线服务"
    ]
  },
  {
    "name": "Giphy",
    "url": "https://giphy.com/",
    "tags": [
      "GIF",
      "表情包",
      "搜索引擎",
      "多媒体",
      "设计素材",
      "动图",
      "社交媒体工具"
    ]
  },
  {
    "name": "Ysjf Material",
    "url": "https://www.ysjf.com/material",
    "tags": [
      "视频素材",
      "视频剪辑",
      "素材资源",
      "影视飓风",
      "设计资源",
      "影视制作"
    ]
  },
  {
    "name": "Mowned",
    "url": "http://mowned.com/",
    "tags": [
      "社交",
      "社区",
      "手机",
      "数码",
      "历史",
      "时间轴",
      "收藏"
    ]
  },
  {
    "name": "ArtBreeder",
    "url": "https://artbreeder.com/",
    "tags": [
      "人工智能",
      "图像生成",
      "设计工具",
      "艺术制作",
      "社区",
      "在线工具"
    ]
  },
  {
    "name": "Ncov DXY",
    "url": "https://ncov.dxy.cn/ncovh5/view/pneumonia",
    "tags": [
      "医疗健康",
      "新冠疫情",
      "疫情地图",
      "数据可视化",
      "历史存档",
      "丁香医生"
    ]
  },
  {
    "name": "IAPLC",
    "url": "https://iaplc.com/c/",
    "tags": [
      "水草造景",
      "水族",
      "大赛官网",
      "图库",
      "艺术设计",
      "IAPLC"
    ]
  },
  {
    "name": "League of Legends Nexus",
    "url": "https://nexus.leagueoflegends.com/en-us/",
    "tags": [
      "游戏",
      "英雄联盟",
      "开发者博客",
      "官方资讯"
    ]
  },
  {
    "name": "YSJF",
    "url": "https://www.ysjf.com/material",
    "tags": [
      "影视飓风",
      "视频素材",
      "后期制作",
      "设计资源",
      "音效",
      "摄影素材"
    ]
  },
  {
    "name": "Sketchfab",
    "url": "https://sketchfab.com/",
    "tags": [
      "3D模型",
      "素材资源",
      "设计工具",
      "模型下载",
      "创作者社区",
      "VR/AR"
    ]
  },
  {
    "name": "Thingiverse",
    "url": "https://www.thingiverse.com/",
    "tags": [
      "3D打印",
      "3D模型",
      "模型库",
      "创客",
      "社区",
      "设计",
      "开源资源"
    ]
  }
];
