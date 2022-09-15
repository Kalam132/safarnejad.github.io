const info = {
    pageTitle: 'ساختمان داده‌ها و الگوریتم‌ها (۴۰۲۵۴) - بهار ۱۴۰۰-۱۴۰۱',
    courseTitle: 'ساختمان داده‌ها و الگوریتم‌ها',
    courseNum: '۴۰۲۵۴',
    department: 'دانشگاه صنعتی شریف، دانشکدۀ مهندسی کامپیوتر',
    semester: 'ترم بهار ۱۴۰۰-۱۴۰۱',
    professor: 'مهدی صفرنژاد',
    inPersonClass: 'کلاس ۱۰۱ دانشکده مهندسی کامپیوتر - ساعت ۹ تا ۱۰:۳۰ روزهای یک‌شنبه و سه‌شنبه',
    virtualClass: {
        link: 'https://vc.sharif.edu/ch/safarnejad',
        title: 'کلاس‌های مجازی دانشگاه شریف',
        note: 'یک‌شنبه‌ها و سه‌شنبه‌ها - ساعت ۷:۳۰ الی ۹:۰۰'
    },
    inPersonTaClass: 'کلاس ۱۰۱ دانشکده مهندسی کامپیوتر - ساعت ۹ تا ۱۰:۳۰ روزهای شنبه',
    virtualTaClass: {
        link: 'https://vc.sharif.edu/ch/safarnejad-ta',
        title: 'کلاس‌های مجازی دانشگاه شریف',
        note: 'به‌صورت موردی برگزار می‌شود.'
    },
    queraLink: 'https://quera.ir/course/9121',
    homepages: [
        {
            title: 'سایت اصلی درس',
            link: 'http://ce.sharif.edu/~safarnejad/ce254',
            note: 'موارد مرتبط با درس'
        },
        {
            title: 'کوئرا',
            link: 'https://quera.ir/course/9121',
            note: 'برای ارسال تمرین‌ها و گفت‌و‌گو'
        }
    ],
    bookCover: {
        image: 'img/ghodsi.jpg',
        alt: 'مرجع اصلی درس'
    },
    marksSpreadsheet: 'https://docs.google.com/spreadsheets/d/1bATanH69B85dwogGzo2J2-aMrk0JuiiZJkvDrE_9i9c/edit?usp=sharing',
    references: [
        {
            link: 'https://fatemi.ir/book/داده%E2%80%8Cساختارها-و-مبانی-الگوریتم%E2%80%8Cها',
            title: 'داده‌ساختارها و مبانی الگوریتم‌ها',
            note: '، محمد قدسی، انتشارات فاطمی، ۱۳۸۸.'
        },
        {
            link: 'https://en.wikipedia.org/wiki/Introduction_to_Algorithms',
            title: 'Introduction to Algorithms',
            note: ' (3rd Edition), Charles E. Leiserson, Clifford Stein, Ronald Rivest, and Thomas H. Cormen, MIT Press, 2009.',
            isLatin: true
        }
    ],
    rulePage: 'rules.html',
    gradingPage: 'grading.html'
}

const sessions = [
    {
        num: '۱',
        date: '۳ فروردین ۱۴۰۲',
        subject: 'موضوع',
        notes: [
            {
                name: 'یادداشت ترم‌های قبل',
                link: 'lec.html?num=1'
            },
            {
                name: 'جزوه دانشجویان',
                link: 'student-notes/DS_1.pdf'
            }
        ],
        further: ''
    },
    {
        subject: 'میان‌ترم',
        further: '(پنج‌شنبه ۱۱ آذر ۱۴۰۰ - ساعت ۱۰:۰۰ صبح)',
        isExam: true
    },
    {
        subject: '۲۶ بهمن - تعطیل رسمی - ۱۳ رجب',
        isHoliday: true
    },
    {
        subject: 'کوئیز دوم - ۱۳ آبان',
        isQuiz: true
    }
]

const marks = [
    {
        name: 'تمرین‌های نظری',
        mark: '۰',
        note: 'از این تمرین‌ها کوئیز گرفته می‌شود'
    },
    {
        name: 'تمرین‌های عملی',
        mark: '۴'
    },
    {
        name: 'کوئیز‌ها',
        mark: '۴',
        note: 'با اطلاع قبلی'
    },
    {
        name: 'میان‌ترم',
        mark: '۶'
    },
    {
        name: 'پایان‌ترم',
        mark: '۶'
    },
    {
        name: 'چالش',
        mark: '۶',
        note: 'امتیازی'
    },
]

const assignments = [
    {
        num: 'اول',
        subject: 'تفکر الگوریتمی',
        publishDate: '۱۱ مهر',
        dueDate: '۲۱ مهر'
    },
    {
        num: 'دوم',
        subject: 'مرتب‌سازی',
        publishDate: '۱۱ مهر',
        dueDate: '۲۱ مهر'
    },
    {
        num: 'سوم',
        subject: 'درخت‌ها',
        publishDate: '۱۱ مهر',
        dueDate: '۲۱ مهر'
    },
    {
        num: 'چهارم',
        subject: 'درهم‌سازی',
        publishDate: '۱۱ مهر',
        dueDate: '۲۱ مهر'
    },
    {
        num: 'پنجم',
        subject: 'گراف',
        publishDate: '۱۱ مهر',
        dueDate: '۲۱ مهر'
    }
]

const challenge = [
    {
        title: 'فاز اول',
        publishDate: '۶ آبان',
        dueDate: '۲۵ آذر'
    },
    {
        title: 'فاز دوم',
        publishDate: '۶ آذر',
        dueDate: '۲۵ دی'
    },
]

const tas = [
    {
        name: 'محمدمهدی قیدی',
        responsibility: 'سردستیار',
        email: 'gheidimahdi@gmail.com'
    },
    {
        name: 'نوید اسلامی',
        responsibility: 'مسئول تمرین‌های عملی',
        email: 'n3slami@gmail.com'
    },
    {
        name: 'میلاد سعادت',
        responsibility: 'مسئول تمرین‌های تئوری',
        email: 'msaadat1379@gmail.com'
    },
    {
        name: 'امیرمهدی کوششی',
        responsibility: '',
        email: 'amk_amir82@yahoo.com'
    }
]