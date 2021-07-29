const quotes = [
    {   quote:"나를 죽이지 못하는 고통은 나를 더 강하게 만든다",
        author:"프리드리히 니체 - 독일의 철학자"
    },
    {   quote:"때때로 인생은 당신에게 큰 시련을 줄 것이다, 하지만 스스로에 대한 믿음만 있다면 시련은 시련이 아니다",
        author:"스티브 잡스 - 애플 창업자"
    },
    {   quote:"앞으로 나아가는 비결은 시작하는 것입니다",
        author:"마크 트웨인 - 미국의 소설가"
    },
    {   quote:"음악이 없다면 인생은 잘못된 것이다",
        author:"프리드리히 니체 - 독일의 철학자"
    },
    {   quote:"나는 과거를 뒤돌아볼 것이 아니라, 미래에 대해 기대만 할 것이 아니라, 현재를 살아가야만 해",
        author:"준세이 아가타 - 영화 냉정과 열정사이 中"
    },
    {   quote:"한번 인생은 제대로만 살 수 있다면 한번으로도 충분하다",
        author:"메이 웨스트 - 미국의 여배우, 극작가"
    },
    {   quote:"진실을 말한다면 어떤 것도 기억할 필요가 없다",
        author:"마크 트웨인 - 미국의 소설가"
    },
    {   quote:"어둠은 어둠을 내쫓을수 없고, 오직 빛만이 가능하듯이 증오는 증오를 내쫓을 수 없고 오직 사랑만으로만 가능합니다",
        author:"마틴 루터 킹 - 미국의 민권 운동가, 목사"
    },
    {   quote:"친구란 너의 모든 것을 다 알고있다 하더라도 여전히 너를 사랑할 사람이다",
        author:"엘버트 허버드 - 미국의 철학자, 작가"
    },
    {   quote:"산다는 것은 세상에서 가장 드문 일이다. 대다수 사람들은 그저 존재할 따름이다",
        author:"오스카 와일드 - 영국의 극작가"
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;