import STUDENT from '../lib/img/student.jpg';
import TEACHER from '../lib/img/teacher.jpg';
import ADMIN from '../lib/img/admin.jpg';
export const STUDENT_FUNCTION_lIST=[
    {
        title:"信息设置",
        description:"根据自身情况修改信息",
        icon:'iconset-s',
        url:'/setting'
    },
    {
        title:"数据录入",
        description:"学生根据自己获奖情况录入自己综合素质的各个方面的数据",
        icon:'iconshujuluru',
        url:''
    },
    {
        title:"个人详情页",
        description:"针对每个学生的数据，详细展示学生各项数据的占比",
        icon:'icongerenxinxi',
        url:'/detail'
    },
    {
        title:"综合对比",
        description:"学生之间的综合比对，显示出对比分析结果",
        icon:'iconduibivs',
        url:''
    },
    {
        title:"综合排名",
        description:"系统数据库中所有学生综合排名，并通过各种条件进行筛选",
        icon:'iconpaiming',
        url:'/rank'
    },
    {
        title:"个人分析结果",
        description:"针对学生的每项数据，做出综合性分析",
        icon:'iconhuaxiangduibifenxi',
        url:'/analyse'
    },
]
export const TEACHER_FUNCTION_lIST=[
    {
        title:"数据录入",
        description:"老师根据自己学生情况录入学生综合素质的各个方面的数据",
        icon:'iconshujuluru',
        url:''
    },
    {
        title:"学生个人详情页",
        description:"针对每个学生的数据，详细展示学生各项数据的占比",
        icon:'icongerenxinxi',
        url:''
    },
    {
        title:"学生综合对比",
        description:"学生之间的综合比对，显示出对比分析结果",
        icon:'iconduibivs',
        url:''
    },
    {
        title:"学生综合排名",
        description:"系统数据库中所有学生综合排名，并通过各种条件进行筛选",
        icon:'iconpaiming',
        url:''
    },
    {
        title:"审核学生综合成绩",
        description:"针对学生的每项数据，做出综合性分析",
        icon:'iconshenhe',
        url:''
    },
]
export const ADMIN_FUNCTION_lIST=[
    {
        title:"学生个人详情页",
        description:"针对每个学生的数据，详细展示学生各项数据的占比",
        icon:'icongerenxinxi',
        url:''
    },
    {
        title:"学生综合排名",
        description:"系统数据库中所有学生综合排名，并通过各种条件进行筛选",
        icon:'iconpaiming',
        url:''
    },
    {
        title:"综合素质评定元素修改",
        description:"教务管理员对综合评定元素及分数进行修改",
        icon:'iconshenhe',
        url:''
    },
]
export const CONTACT_LIST=[
    {
        title:"QQ:1223010592",
        icon:'iconqq',
        url:''
    },
    {
        title:"邮箱:1223010592@qq.com",
        icon:'iconyouxiang',
        url:''
    },
    {
        title:"电话:18827552328",
        icon:'icondianhua3',
        url:''
    },
]
export const LOGIN_LIST=[
    {
        title:"student",
        description:"学生登录，修改设置，录入数据，查看综合素质排名，个人详情，分析结果，学生对比分析详情",
        img:STUDENT,
        url:''
    },
    {
        title:"teacher",
        description:"老师登录，录入学生数据，查看综合排名，审核学生自主录入数据，学生详情，学生对比分析详情",
        img:TEACHER,
        url:''
    },
    {
        title:"administrator",
        description:"管理员登录，查看学生综合排名，修改综合素质评定元素及成绩",
        img:ADMIN,
        url:''
    }
]
export const LOGIN_ROLE={
    student:{
        name:'学生登录',
        placeholder:{
            name:'请输入学生学号',
            password:'请输入密码'
        }
        },
    teacher:{
        name:'老师登录',
        placeholder:{
            name:'请输入教师工号',
            password:'请输入密码'
        }
      },
    administrator:{
        name:'管理员登录',
        placeholder:{
            name:'请输入管理员工号',
            password:'请输入密码'
        }
    }
}
export const CHOSE_YEAR=[
    {key:"第一年度第一学期",value:1},
    {key:"第一年度第二学期",value:2},
    {key:"第二年度第一学期",value:3},
    {key:"第二年度第二学期",value:4},
    {key:"第三年度第一学期",value:5},
    {key:"第三年度第二学期",value:6},
    {key:"第四年度第一学期",value:7},
    {key:"第四年度第二学期",value:8}
]
export const CHOSE_CONDITION=[
    {key:"按综合成绩",value:0},
    {key:"按课程成绩",value:1},
    {key:"按打卡成绩",value:2},
    {key:"按德育成绩",value:3},
    {key:"按智育成绩",value:4},
    {key:"按体育成绩",value:5},
    {key:"按美育成绩",value:6}
]
export const SCHOOL_CONDITION=[
    {key:"按班级排名",value:0},
    {key:"按院级排名",value:1}
]
export const MYSELF=[{
    rank:1,
    name:"杨芳",
    class:"软工1512",
    comprehensive:84.38,
    course:85.4,
    card:89,
    moral:22,
    intellectual:32,
    sports:18,
    aesthetic:10
}]
export const OTHER=[
    {
        rank:1,
        name:"杨芳",
        class:"软工1512",
        comprehensive:84.38,
        course:85.4,
        card:89,
        moral:22,
        intellectual:32,
        sports:18,
        aesthetic:10
    },
    {
        rank:2,
        name:"王小",
        class:"软工1512",
        comprehensive:82.75,
        course:83.5,
        card:89,
        moral:21,
        intellectual:35,
        sports:15,
        aesthetic:10
    },
    {
        rank:3,
        name:"陈豪",
        class:"软工1512",
        comprehensive:82.4,
        course:83,
        card:70,
        moral:22,
        intellectual:35,
        sports:9,
        aesthetic:15
    },
    {
        rank:4,
        name:"张廷",
        class:"软工1512",
        comprehensive:81.7,
        course:85,
        card:89,
        moral:21,
        intellectual:33,
        sports:10,
        aesthetic:10
    },
    {
        rank:5,
        name:"王文",
        class:"软工1512",
        comprehensive:81.22,
        course:82.6,
        card:54,
        moral:20,
        intellectual:29,
        sports:18,
        aesthetic:12
    },
    {
        rank:6,
        name:"刘威",
        class:"软工1512",
        comprehensive:81,
        course:87,
        card:85,
        moral:18,
        intellectual:36,
        sports:5,
        aesthetic:8
    },
    {
        rank:7,
        name:"谭柳依",
        class:"软工1512",
        comprehensive:79.32,
        course:78.6,
        card:90,
        moral:26,
        intellectual:19,
        sports:18,
        aesthetic:18
    },
    {
        rank:8,
        name:"裴字钟",
        class:"软工1512",
        comprehensive:79.92,
        course:75.6,
        card:89,
        moral:21,
        intellectual:18,
        sports:32,
        aesthetic:19
    },
    {
        rank:9,
        name:"田一小",
        class:"软工1512",
        comprehensive:78.45,
        course:79.5,
        card:100,
        moral:18,
        intellectual:22,
        sports:21,
        aesthetic:15
    },
    
    {
        rank:10,
        name:"蒋明函",
        class:"软工1512",
        comprehensive:75.56,
        course:81.8,
        card:32,
        moral:20,
        intellectual:13,
        sports:18,
        aesthetic:10
    }
]
export const RANK_IMG={
    1:"iconguanjun",
    2:"iconyajun",
    3:"iconjijun",
}
export const DETAIL_TAB=["课程成绩","打卡成绩","德育成绩","智育成绩","体育成绩","美育成绩","综合成绩"]
export const COURSE_GRADE=[
    {
        year:"第三学年第一学期",
        name:"第九届蓝桥杯",
        class:'省级',
        sort:"二等奖",
        grade:8,
        img:'lanqiao.png',
        state:"已审核",
    },
    // {
    //     id:2,
    //     year:"第三学年第一学期",
    //     name:"Java Web编程技术",
    //     grade:85,
    //     credit:3,
    //     sort:"方向必修课",
    // },
    // {
    //     id:3,
    //     year:"第三学年第一学期",
    //     name:"计算机专业英语	",
    //     grade:78,
    //     credit:2,
    //     sort:"方向选修课",
    // },{
    //     id:4,
    //     year:"第三学年第一学期",
    //     name:"团队激励与沟通",
    //     grade:80,
    //     credit:1,
    //     sort:"学科基础课",
    // },
    // {
    //     id:5,
    //     year:"第三学年第一学期",
    //     name:"Java高级编程技术",
    //     grade:92,
    //     credit:2.5,
    //     sort:"通识教育选修",
    // },
    // {
    //     id:6,
    //     year:"第三学年第一学期",
    //     name:"网络编程技术",
    //     grade:80,
    //     credit:2,
    //     sort:"通识教育选修",
    // },
    // {
    //     id:7,
    //     year:"第三学年第一学期",
    //     name:"操作系统",
    //     grade:82,
    //     credit:3,
    //     sort:"专业基础课",
    // },
    // {
    //     id:8,
    //     year:"第三学年第一学期",
    //     name:"数据库系统",
    //     grade:81,
    //     credit:3,
    //     sort:"专业基础课",
    // },
    // {
    //     id:9,
    //     year:"第三学年第一学期",
    //     name:"	计算机网络",
    //     grade:82,
    //     credit:3,
    //     sort:"专业基础课",
    // }
]