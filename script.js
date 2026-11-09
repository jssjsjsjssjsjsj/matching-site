// ==============================
// MATE.
// ==============================


// ==============================
// SCREEN
// ==============================

const setupScreen =
    document.getElementById("setupScreen");

const hobbyScreen =
    document.getElementById("hobbyScreen");

const valueScreen =
    document.getElementById("valueScreen");

const discoverScreen =
    document.getElementById("discoverScreen");


// ==============================
// USER
// ==============================

let user = {

    name: "",
    age: "",
    area: "",
    about: "",

    hobbies: [],
    values: []

};


// ==============================
// PROFILES
// ==============================

const profiles = [

    {
        name: "やすあき",
        age: 21,
        area: "東京・大田区",

        image: "yasu.jpg",

        bio:
            "ハイエースとバイクが大好き。休日は愛車で出かけることが多いです。",

        hobbies: [
            "車",
            "バイク",
            "ドライブ"
        ],

        values: [
            "外に出たい",
            "新しいこと",
            "こだわり"
        ],

        tags: [
            "ハイエース",
            "バイク",
            "ドライブ"
        ]
    },


    {
        name: "ちゃむ男",
        age: 22,
        area: "東京・渋谷",

        image: "chamuo.jpg",

        bio:
            "タバコとパチンコが大好き。渋谷TOHOで働いてます。",

        hobbies: [
            "タバコ",
            "パチンコ"
        ],

        values: [
            "外に出たい",
            "こだわり"
        ],

        tags: [
            "タバコ",
            "パチンコ",
            "渋谷TOHO"
        ]
    },


    {
        name: "えいちゃん",
        age: 19,
        area: "東京",

        image: "eijiro.jpg",

        bio:
            "筋肉とミュウツーが大好き。筋トレにハマってます。",

        hobbies: [
            "筋トレ",
            "ミュウツー"
        ],

        values: [
            "こだわり",
            "新しいこと"
        ],

        tags: [
            "筋肉",
            "ミュウツー",
            "筋トレ"
        ]
    },


    {
        name: "Yuki",
        age: 20,
        area: "東京・世田谷区",

        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900",

        bio:
            "カフェ巡りと旅行が好き。休日は友達といろんな場所に行きます。",

        hobbies: [
            "旅行",
            "カフェ",
            "音楽"
        ],

        values: [
            "外に出たい",
            "新しいこと",
            "少人数"
        ],

        tags: [
            "旅行",
            "カフェ",
            "音楽"
        ]
    },


    {
        name: "Ren",
        age: 22,
        area: "東京・渋谷区",

        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900",

        bio:
            "ファッションと音楽が好き。新しいことをするのも好きです。",

        hobbies: [
            "ファッション",
            "音楽",
            "映画"
        ],

        values: [
            "新しいこと",
            "こだわり",
            "外に出たい"
        ],

        tags: [
            "Fashion",
            "Music",
            "Movie"
        ]
    },


    {
        name: "Mina",
        age: 21,
        area: "東京・目黒区",

        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900",

        bio:
            "カフェや映画が好き。ゆっくり話せる時間も大切にしています。",

        hobbies: [
            "カフェ",
            "映画",
            "旅行"
        ],

        values: [
            "少人数",
            "家で過ごす",
            "新しいこと"
        ],

        tags: [
            "Cafe",
            "Movie",
            "Travel"
        ]
    },


    {
        name: "Kaito",
        age: 23,
        area: "神奈川・横浜市",

        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900",

        bio:
            "筋トレとスポーツが好き。休みの日は外で遊ぶことが多いです。",

        hobbies: [
            "筋トレ",
            "スポーツ",
            "ドライブ"
        ],

        values: [
            "外に出たい",
            "大人数",
            "新しいこと"
        ],

        tags: [
            "Gym",
            "Sports",
            "Drive"
        ]
    }

];


// ==============================
// STATE
// ==============================

let currentProfile = 0;

let matches = [];

let messages = [];

let currentChat = null;

let isAnimating = false;


// ==============================
// DEMO LIKES
// ==============================

const receivedLikes = [

    {
        name: "Mina",
        age: 21,

        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900",

        match: 82
    },

    {
        name: "Yuki",
        age: 20,

        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900",

        match: 76
    },

    {
        name: "Ren",
        age: 22,

        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900",

        match: 69
    }

];


// ==============================
// DEMO MESSAGES
// ==============================

messages = [

    {
        name: "やすあき",

        image: "yasu.jpg",

        text:
            "今週どっか行く？",

        time: "21:34",

        unread: true,

        chat: [
            {
                text: "今週どっか行く？",
                type: "received"
            }
        ]
    },

    {
        name: "Mina",

        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900",

        text:
            "マッチありがとう！",

        time: "18:42",

        unread: true,

        chat: [
            {
                text: "マッチありがとう！",
                type: "received"
            }
        ]
    }

];


// ==============================
// SCREEN CHANGE
// ==============================

function showScreen(screen) {

    setupScreen.classList.remove("active");

    hobbyScreen.classList.remove("active");

    valueScreen.classList.remove("active");

    discoverScreen.classList.remove("active");

    screen.classList.add("active");

}


// ==============================
// PROFILE
// ==============================

document
    .getElementById("profileNext")
    .addEventListener("click", () => {

        user.name =
            document
                .getElementById("userName")
                .value.trim();

        user.age =
            document
                .getElementById("userAge")
                .value.trim();

        user.area =
            document
                .getElementById("userArea")
                .value.trim();

        user.about =
            document
                .getElementById("userAbout")
                .value.trim();


        if (
            !user.name ||
            !user.age ||
            !user.area
        ) {

            alert(
                "名前・年齢・エリアを入力してください！"
            );

            return;
        }


        showScreen(hobbyScreen);

    });


// ==============================
// HOBBY
// ==============================

document
    .querySelectorAll(".hobby")
    .forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("selected");

            const value =
                button.dataset.value;


            if (
                button.classList.contains("selected")
            ) {

                if (
                    !user.hobbies.includes(value)
                ) {

                    user.hobbies.push(value);

                }

            } else {

                user.hobbies =
                    user.hobbies.filter(
                        item => item !== value
                    );

            }

        });

    });


// ==============================
// HOBBY NEXT
// ==============================

document
    .getElementById("hobbyNext")
    .addEventListener("click", () => {

        if (
            user.hobbies.length === 0
        ) {

            alert(
                "好きなことを1つ以上選んでください！"
            );

            return;
        }


        showScreen(valueScreen);

    });


// ==============================
// VALUES
// ==============================

document
    .querySelectorAll(".value")
    .forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("selected");

            const value =
                button.dataset.value;


            if (
                button.classList.contains("selected")
            ) {

                if (
                    !user.values.includes(value)
                ) {

                    user.values.push(value);

                }

            } else {

                user.values =
                    user.values.filter(
                        item => item !== value
                    );

            }

        });

    });


// ==============================
// START
// ==============================

document
    .getElementById("startButton")
    .addEventListener("click", () => {

        if (
            user.values.length === 0
        ) {

            alert(
                "価値観を1つ以上選んでください！"
            );

            return;
        }


        currentProfile = 0;

        showScreen(discoverScreen);

        showProfile();

        renderLikes();

        renderMessages();

    });


// ==============================
// SCORE
// ==============================

function calculateCompatibility(profile) {

    let hobbyMatch = 0;

    let valueMatch = 0;


    profile.hobbies.forEach(hobby => {

        if (
            user.hobbies.includes(hobby)
        ) {

            hobbyMatch++;

        }

    });


    profile.values.forEach(value => {

        if (
            user.values.includes(value)
        ) {

            valueMatch++;

        }

    });


    const hobbyMax =
        Math.max(
            user.hobbies.length,
            profile.hobbies.length,
            1
        );


    const valueMax =
        Math.max(
            user.values.length,
            profile.values.length,
            1
        );


    const hobbyScore =
        hobbyMatch / hobbyMax * 100;


    const valueScore =
        valueMatch / valueMax * 100;


    let score =
        hobbyScore * 0.6 +
        valueScore * 0.4;


    score =
        Math.max(
            score,
            58
        );


    return Math.round(score);

}


// ==============================
// SHOW PROFILE
// ==============================

function showProfile() {

    const profile =
        profiles[currentProfile];


    document
        .getElementById("profileImage")
        .src =
        profile.image;


    document
        .getElementById("profileName")
        .textContent =
        `${profile.name}, ${profile.age}`;


    document
        .getElementById("profileLocation")
        .textContent =
        profile.area;


    document
        .getElementById("profileBio")
        .textContent =
        profile.bio;


    const tags =
        document.getElementById(
            "profileTags"
        );


    tags.innerHTML = "";


    profile.tags.forEach(tag => {

        const span =
            document.createElement("span");

        span.textContent = tag;

        tags.appendChild(span);

    });


    const score =
        calculateCompatibility(
            profile
        );


    document
        .getElementById("matchScore")
        .textContent =
        `${score}% MATCH`;

}


// ==============================
// NEXT
// ==============================

function nextProfile() {

    currentProfile++;

    if (
        currentProfile >= profiles.length
    ) {

        currentProfile = 0;

    }


    showProfile();

}


// ==============================
// ADD MATCH
// ==============================

function addMatch(profile) {

    const exists =
        matches.some(
            item =>
                item.name === profile.name
        );


    if (exists) {

        return;

    }


    matches.push(profile);


    document
        .getElementById("matchCount")
        .textContent =
        matches.length;


    const list =
        document.getElementById(
            "matchList"
        );


    const item =
        document.createElement("div");


    item.className =
        "match-item";


    item.innerHTML = `

        <strong>
            ${profile.name}
        </strong>

        <span>
            ${profile.area}
        </span>

    `;


    list.prepend(item);

}


// ==============================
// LIKE
// ==============================

document
    .getElementById("likeButton")
    .addEventListener("click", () => {

        if (isAnimating) return;


        isAnimating = true;


        const profile =
            profiles[currentProfile];


        addMatch(profile);


        addMessageForMatch(
            profile
        );


        showMatchAnimation();


        setTimeout(() => {

            nextProfile();

            isAnimating = false;

        }, 1600);

    });


// ==============================
// ADD MESSAGE
// ==============================

function addMessageForMatch(profile) {

    const exists =
        messages.some(
            message =>
                message.name ===
                profile.name
        );


    if (exists) {

        return;

    }


    const newMessage = {

        name: profile.name,

        image: profile.image,

        text:
            "マッチありがとう！",

        time: "今",

        unread: true,

        chat: [

            {
                text:
                    "マッチありがとう！",

                type:
                    "received"
            }

        ]

    };


    messages.unshift(
        newMessage
    );


    renderMessages();

}


// ==============================
// PASS
// ==============================

document
    .getElementById("passButton")
    .addEventListener("click", () => {

        if (isAnimating) return;


        isAnimating = true;


        nextProfile();


        setTimeout(() => {

            isAnimating = false;

        }, 300);

    });


// ==============================
// MATCH ANIMATION
// ==============================

function showMatchAnimation() {

    const overlay =
        document.createElement("div");


    overlay.className =
        "match-overlay";


    overlay.innerHTML = `

        <div class="match-content">

            <p class="match-small">
                YOU GOT A
            </p>

            <h2>
                MATCH
            </h2>

            <p class="match-sub">
                You both liked each other.
            </p>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    setTimeout(() => {

        overlay.classList.add(
            "show"
        );

    }, 20);


    setTimeout(() => {

        overlay.remove();

    }, 1600);

}


// ==============================
// RENDER LIKES
// ==============================

function renderLikes() {

    const list =
        document.getElementById(
            "likesList"
        );


    const count =
        document.getElementById(
            "likesCount"
        );


    count.textContent =
        receivedLikes.length;


    list.innerHTML = "";


    receivedLikes.forEach(person => {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "like-item";


        item.innerHTML = `

            <div class="like-badge">
                ♥
            </div>

            <div class="like-item-image">

                <img
                    src="${person.image}"
                    alt="${person.name}"
                >

            </div>

            <div class="like-item-info">

                <div>

                    <div class="like-item-name">
                        ${person.name}
                    </div>

                    <div class="like-item-age">
                        ${person.age} YEARS OLD
                    </div>

                </div>

                <div class="like-item-match">
                    ${person.match}% MATCH
                </div>

            </div>

        `;


        list.appendChild(item);

    });

}


// ==============================
// RENDER MESSAGES
// ==============================

function renderMessages() {

    const list =
        document.getElementById(
            "messagesList"
        );


    const empty =
        document.getElementById(
            "messagesEmpty"
        );


    const count =
        document.getElementById(
            "messagesCount"
        );


    list.innerHTML = "";


    const unreadCount =
        messages.filter(
            message =>
                message.unread
        ).length;


    count.textContent =
        unreadCount;


    if (
        messages.length === 0
    ) {

        empty.style.display =
            "block";

        return;

    }


    empty.style.display =
        "none";


    messages.forEach(
        (message, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "message-item";


            item.innerHTML = `

                <div class="message-avatar">

                    <img
                        src="${message.image}"
                        alt="${message.name}"
                    >

                </div>


                <div class="message-content">

                    <div class="message-name-row">

                        <span class="message-name">
                            ${message.name}
                        </span>

                        <span class="message-time">
                            ${message.time}
                        </span>

                    </div>


                    <div class="message-preview">
                        ${message.text}
                    </div>

                </div>


                ${
                    message.unread
                    ?
                    `<div class="message-unread"></div>`
                    :
                    ""
                }

            `;


            item.addEventListener(
                "click",
                () => {

                    openChat(
                        message
                    );

                }
            );


            list.appendChild(item);

        }
    );

}


// ==============================
// OPEN CHAT
// ==============================

function openChat(message) {

    currentChat =
        message;


    document
        .getElementById("chatName")
        .textContent =
        message.name;


    const avatar =
        document.getElementById(
            "chatAvatar"
        );


    avatar.style.backgroundImage =
        `url("${message.image}")`;


    const chatMessages =
        document.getElementById(
            "chatMessages"
        );


    chatMessages.innerHTML = "";


    // これまでの会話

    message.chat.forEach(
        bubble => {

            addChatBubble(
                bubble.text,
                bubble.type
            );

        }
    );


    document
        .getElementById("chatModal")
        .classList.add("open");


    // 既読

    message.unread =
        false;


    renderMessages();

}


// ==============================
// CHAT BUBBLE
// ==============================

function addChatBubble(
    text,
    type
) {

    const container =
        document.getElementById(
            "chatMessages"
        );


    const bubble =
        document.createElement(
            "div"
        );


    bubble.className =
        `chat-bubble ${type}`;


    bubble.textContent =
        text;


    container.appendChild(
        bubble
    );


    container.scrollTop =
        container.scrollHeight;

}


// ==============================
// SEND MESSAGE
// ==============================

function sendMessage() {

    if (!currentChat) {

        return;

    }


    const input =
        document.getElementById(
            "chatInput"
        );


    const text =
        input.value.trim();


    if (!text) {

        return;

    }


    // 画面に表示

    addChatBubble(
        text,
        "sent"
    );


    // データにも保存

    currentChat.chat.push({

        text: text,

        type: "sent"

    });


    currentChat.text =
        text;


    currentChat.time =
        "今";


    currentChat.unread =
        false;


    input.value = "";


    renderMessages();

}


// ==============================
// SEND BUTTON
// ==============================

document
    .getElementById(
        "sendMessage"
    )
    .addEventListener(
        "click",
        sendMessage
    );


// ==============================
// ENTER SEND
// ==============================

document
    .getElementById(
        "chatInput"
    )
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                sendMessage();

            }

        }
    );


// ==============================
// CLOSE CHAT
// ==============================

document
    .getElementById(
        "closeChat"
    )
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "chatModal"
                )
                .classList.remove(
                    "open"
                );


            currentChat =
                null;

        }
    );


// ==============================
// INITIAL
// ==============================

showScreen(
    setupScreen
);
