function showContent(crcId) {
    //  隐藏所有内容卡片
    const contentCards = document.querySelectorAll('.crc');
    contentCards.forEach(card => {
        card.classList.remove('active');
    });

    //  显示指定ID的内容卡片
    document.getElementById(crcId).classList.add('active');


}