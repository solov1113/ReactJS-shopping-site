import React from 'react'
import Card from './Card'

export default function Items() {
    return (
        <div className="items-container">
            <Card id="1" brand="adidas" model="Adidas Superstar Erkek Ayakkabı - C77124" price="448,99 TL" image="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/2526816/1/4055012260221_1_org.jpg" sizes={[39,40,41]}/>
            <Card id="2" brand="Nike" model="Nike 616544-101 Nike T-Lite 11 Erkek Yürüyüş Ayakkabı" price="309 TL" image="https://img-trendyol.mncdn.com/assets/product/media/images/20191120/14/692889/7432440/1/1_org.jpg" sizes={[39]}/>
            <Card id="3" brand="Nike" model="Erkek Koşu Ayakkabı - Air Monacrh IV" price="329,70 TL" image="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/3486250/1/885259556603_2_org.jpg" sizes={[40,41]}/>
            <Card id="4" brand="Nike" model="Nike AQ7481-002 DOWNSHIFTER 9 Erkek Koşu Ayakkabı" price="368,90 TL" image="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/6140564/1/192499165695_1_org.jpg" sizes={[39,40,41,43]}/>
            <Card id="5" brand="adidas" model="ARCHIVO Siyah Erkek Koşu Ayakkabısı EF0436" price="287,10 TL" image="https://img-trendyol.mncdn.com/assets/product/images/12643/55939739/1/1_org.jpg" sizes={[39,41,43]}/>
        </div>
    )
}
