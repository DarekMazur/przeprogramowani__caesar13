import Eliot from '../Eliot/Eliot'

const Header = () =>{
    return(`
        <header>
            <svg width="1078" height="1078" viewBox="0 0 1078 1078" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g class="wall">
                    <circle cx="539" cy="539" r="539" fill="#C4C4C4"/>
                    <path d="M480 134C517.5 134 568 133.5 601.5 133.5C610.5 149.5 613.843 160.932 620.5 179C680 189 722 218 740.5 228.5C755.5 220 766.5 213.5 784 210.5C790 210.5 867 290 869.5 296C868.214 314.376 858.5 326 852.5 340C874 368.5 895.5 427 901.5 461C916.5 465 931.5 470 946 480C947 511.5 946.5 575 945 601.5C945 606 918 614.5 902.5 619C889.5 675 871 718 851 741C859.5 754.5 865.5 767.5 868.5 783C869.855 790 784 870.809 781.5 870.5C764.5 866.5 753.5 859 740.5 852.5C700 882 641 900 619 902C613 927 611 931 600.5 945C598.5 947.667 479 948.5 479 945C469 929.5 467.5 916.5 462 901.5C413.5 896 355 862.5 340.5 852C323.5 861.5 312.5 865.5 296.5 870C292.5 871.125 257 833 257 833V827L252.5 828C252.5 828 225 801.5 210 784.5C206.5 783.5 222 756.5 229 739.5C204.5 710 189 658 180 619.5C161 615.5 147.5 611.5 132 599.5C130 597.952 132 512 133 479.5C133.138 475 163 468 179.5 460C179.5 435.5 214 365 214 365L219.5 366.5V356L228 342C228 342 211.5 314 208.5 296.5C207.471 290.5 284 221 294.5 210C300.5 206.5 323.5 223.5 342 229C383.5 199 419.5 189 461.5 178C467 161 472.5 139.5 480 134Z" fill="white"/>
                </g>
                <g class="door">
                    <path class="door__frame" d="M480 134C517.5 134 568 133.5 601.5 133.5C610.5 149.5 613.843 160.932 620.5 179C680 189 722 218 740.5 228.5C755.5 220 766.5 213.5 784 210.5C790 210.5 867 290 869.5 296C868.214 314.376 858.5 326 852.5 340C874 368.5 895.5 427 901.5 461C916.5 465 931.5 470 946 480C947 511.5 946.5 575 945 601.5C945 606 918 614.5 902.5 619C889.5 675 871 718 851 741C859.5 754.5 865.5 767.5 868.5 783C869.855 790 784 870.809 781.5 870.5C764.5 866.5 753.5 859 740.5 852.5C700 882 641 900 619 902C613 927 611 931 600.5 945C598.5 947.667 479 948.5 479 945C469 929.5 467.5 916.5 462 901.5C413.5 896 355 862.5 340.5 852C323.5 861.5 312.5 865.5 296.5 870C292.5 871.125 257 833 257 833V827L252.5 828C252.5 828 225 801.5 210 784.5C206.5 783.5 222 756.5 229 739.5C204.5 710 189 658 180 619.5C161 615.5 147.5 611.5 132 599.5C130 597.952 132 512 133 479.5C133.138 475 163 468 179.5 460C179.5 435.5 214 365 214 365L219.5 366.5V356L228 342C228 342 211.5 314 208.5 296.5C207.471 290.5 284 221 294.5 210C300.5 206.5 323.5 223.5 342 229C383.5 199 419.5 189 461.5 178C467 161 472.5 139.5 480 134Z" fill="black" stroke="black" stroke-width="10"/>
                    <circle class="door__bg" cx="540" cy="540" r="301" fill="white" stroke="black" stroke-width="6"/>
                    <path class="door__number--one" d="M332 513.5V443.5L445 358V717H371.5V494L332 513.5Z" fill="black"/>
                    <path class="door__number--three" d="M467 440.5V358L728 359.5C728 359.5 677.5 424.5 646 462C779 513.5 771.5 625 697.5 686.5C695.915 684.763 693.5 682 693.5 682L690 680.5L689 683C689 683 692.698 685.999 695 688C643 724.5 543 752.5 467 675C466.488 671.697 466 666.5 466 666.5L461.5 667L459 661C459 661 480.5 615 498.5 594.5C550 683 658 632 663.5 594.5H671V590L664 582.5L665 569.5L661 569L661.5 550.5C661.5 550.5 659.5 562.5 655.5 558C640.5 533.5 584.5 512 527.5 540C524.5 528.5 521.5 510 521.5 510L573 440.5H467Z" fill="black"/>
                </g>
            </svg>
            <div>    
                <h1>Simple encryptor by Gacek</h1>
                <h2>${Eliot('Encrypt your message')}<h2>
            </div>
            
        </header>
    `)}

export default Header()