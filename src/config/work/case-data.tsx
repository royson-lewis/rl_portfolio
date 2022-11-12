import * as React from 'react'

const workCaseData: Record<
  string,
  {
    projectOverview: string
    projectOverview2?: string
    challenge: string
    challengeSVG: React.ReactElement
    solution: {
      svg: React.ReactElement
      data: Array<{
        title?: string
        para?: string[]
        iFrame?: Record<string, string>
        imageLink?: { src: string; pdfLink?: string; caption?: string }[]
        subSection?: {
          title: string
          para: string[]
          img: { src: string; caption: string; pdfLink: string }[]
        }[]
        greyBG?: boolean
        caption?: string
        mainTitle?: string
        horizontalItems?: {
          type: string
          items: { data: React.SVGProps<SVGSVGElement>; caption: string }[]
        }[]
        svg?: React.ReactElement
        list?: { heading: string; items: string[]; type: string }[]
      }>
    }
  }
> = {
  essence: {
    projectOverview:
      'ESSENCE is an eCommerce platform that provides daily essential products created with ingredients without any artificial processing or harmful chemicals. It focuses on making people get closer to the nature through its products with an elegant and sustainable way for the eco-system.',
    projectOverview2:
      'This project helped me in deepening my knowledge in designing, developing and managing a complete eCommerce website from the ground up and in exploring the brand approach towards providing quality and sustainable products to the end user.',
    challenge:
      "Creating a website with a design and functionality that complements with the theme and intensions of the brand and it's products and build a strong impression in the mind of the customer.",
    challengeSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="161.344"
        height="149.67"
        viewBox="0 0 161.344 149.67"
      >
        <g id="Group_423" data-name="Group 423" transform="translate(0 18.998)">
          <circle
            id="Ellipse_130"
            data-name="Ellipse 130"
            cx="12.953"
            cy="12.953"
            r="12.953"
            transform="translate(0 -3.331)"
            fill="#3f3d56"
          />
          <path
            id="Path_985"
            data-name="Path 985"
            d="M979.641,587.4a23.489,23.489,0,0,1-1.1,6.492c-.015.049-.031.1-.047.146H974.4c0-.044.009-.092.013-.146.273-3.138,1.847-22.24-.035-25.506C974.544,568.649,979.957,577.426,979.641,587.4Z"
            transform="translate(-829.364 -494.443)"
            fill="#58d06f"
          />
          <path
            id="Path_986"
            data-name="Path 986"
            d="M987.889,650.031c-.034.049-.07.1-.106.146h-3.071l.082-.146c.507-.916,2.009-3.654,3.4-6.492,1.5-3.05,2.873-6.216,2.757-7.362C990.989,636.435,992.026,644.313,987.889,650.031Z"
            transform="translate(-837.919 -550.584)"
            fill="#58d06f"
          />
          <rect
            id="Rectangle_1145"
            data-name="Rectangle 1145"
            width="117.73"
            height="0.385"
            transform="translate(43.613 99.314)"
            fill="#e6e6e6"
          />
          <path
            id="Path_987"
            data-name="Path 987"
            d="M822.844,696.323l.61-5.033,17.234-4.423-1.983-5.948c1.381-3.961,3.806-5.9,8.235-3.965l7.62,4.734a4.864,4.864,0,0,1,2.29,4.394h0a4.861,4.861,0,0,1-2.767,4.131C845.553,694.256,834.681,695.8,822.844,696.323Z"
            transform="translate(-697.478 -578.006)"
            fill="#fbbebe"
          />
          <path
            id="Path_988"
            data-name="Path 988"
            d="M771.121,748.932l-5.338-.763-4.993,1.019a2.156,2.156,0,0,1-2.586-2.023h0a2.156,2.156,0,0,1,.857-1.812l7.823-5.894a3.532,3.532,0,0,1,4.575.277l1.948,1.876a7.247,7.247,0,0,0-3.05,3.965Q772.368,746.681,771.121,748.932Z"
            transform="translate(-644.687 -629.09)"
            fill="#2f2e41"
          />
          <ellipse
            id="Ellipse_131"
            data-name="Ellipse 131"
            cx="4.937"
            cy="4.937"
            rx="4.937"
            ry="4.937"
            transform="translate(126.595 57.13)"
            fill="#fbbebe"
          />
          <path
            id="Path_989"
            data-name="Path 989"
            d="M849.29,499.641l-11.057,4.651c.9-4.512,1.347-8.622,0-11.133l7.092-.839C844.973,494.251,846.767,496.835,849.29,499.641Z"
            transform="translate(-710.046 -427.84)"
            fill="#fbbebe"
          />
          <path
            id="Path_990"
            data-name="Path 990"
            d="M762.817,630.722l-4.118-.3c-2.523-10.519-3.814-20.462-3.25-29.536a5.133,5.133,0,0,1,5.234-4.823h0a5.126,5.126,0,0,1,3.417,1.411l5.325,5.067a21.913,21.913,0,0,1,5.4,8.033c1.508,3.95.967,6.164-2.634,5.788a8.884,8.884,0,0,1-5.785-3.076l-3.89-4.521Z"
            transform="translate(-642.332 -512.558)"
            fill="#fbbebe"
          />
          <path
            id="Path_991"
            data-name="Path 991"
            d="M764.156,784.061h0a3.523,3.523,0,0,1-3.105-4.652l.8-2.357.61-5.948c.94-1.918,2.271-1.631,3.813-.153.98-.1,1.191-1.077,1.068-2.44l3.092,4.162a2.481,2.481,0,0,1,.266,2.509l-3.112,6.825A3.523,3.523,0,0,1,764.156,784.061Z"
            transform="translate(-646.86 -653.397)"
            fill="#2f2e41"
          />
          <path
            id="Path_992"
            data-name="Path 992"
            d="M848.632,644.776c-5.643,3.2-7.411,3.3-13.04,5.567l-4.88-2.745c-5.732,2.119-9.752-.786-14.107-5.109,2.85-4.747,1.589-10.915,3.355-10.828l21.123,6.634.915,2.288Z"
            transform="translate(-692.383 -541.633)"
            fill="#2f2e41"
          />
          <path
            id="Path_993"
            data-name="Path 993"
            d="M834.307,545.048c-7.458,3.228-15.489-.19-22.343-7.7l-4.538-18.329a1.53,1.53,0,0,1,1.178-1.893l5.266-1.053,2.593,4.118,5.185-4.575,5.507,1.8a4.251,4.251,0,0,1,2.866,3.3Z"
            transform="translate(-684.844 -446.863)"
            fill="#3f3d56"
          />
          <path
            id="Path_994"
            data-name="Path 994"
            d="M881.937,723.64h0a2.693,2.693,0,0,1-1.1-4.258l3.486-4.112,2.44,1.373-1.257,5.123a2.693,2.693,0,0,1-3.574,1.875Z"
            transform="translate(-744.322 -609.916)"
            opacity="0.2"
          />
          <path
            id="Path_995"
            data-name="Path 995"
            d="M881.937,720.313h0a2.693,2.693,0,0,1-1.1-4.258l3.486-4.112,2.44,1.373-1.257,5.123a2.693,2.693,0,0,1-3.575,1.875Z"
            transform="translate(-744.322 -607.199)"
            fill="#fbbebe"
          />
          <path
            id="Path_996"
            data-name="Path 996"
            d="M903.038,563.031l-3.66-2.44,5.338-14.183-1.983-19.979,1.808,1.13a8.452,8.452,0,0,1,3.8,5.468l2.932,14.3C909.991,553.912,907.852,559.709,903.038,563.031Z"
            transform="translate(-759.981 -455.695)"
            fill="#3f3d56"
          />
          <path
            id="Path_997"
            data-name="Path 997"
            d="M776.661,555.922l1.83,9.151-1.505,5.352Z"
            transform="translate(-635.816 -471.233)"
            opacity="0.2"
          />
          <path
            id="Path_998"
            data-name="Path 998"
            d="M828.159,442.868s-2.845-9.31,5.849-7.357a6.652,6.652,0,0,1,3.44,2.112.838.838,0,0,0,.655.268c1.389,0,2.247,4.963-.531,7.145,0,0,.567-2.937-.464-3.938a2.207,2.207,0,0,1-.458-.59c-.671-1.353-2.925-1.8-4.479-1.681-.794.059-.863,1.443-1.741,1.249C828.431,439.635,827.793,441.951,828.159,442.868Z"
            transform="translate(-701.456 -380.693)"
            fill="#2f2e41"
          />
          <path
            id="Path_1000"
            data-name="Path 1000"
            d="M712.429,497.33h5.381a.34.34,0,0,1,.34.34v.449a.34.34,0,0,1-.34.34h-5.381a.34.34,0,0,1-.34-.34v-.449A.34.34,0,0,1,712.429,497.33Z"
            transform="translate(-583.082 -423.383)"
            fill="#3f3d56"
          />
          <path
            id="Path_1001"
            data-name="Path 1001"
            d="M844.242,548.163a35.958,35.958,0,0,1-7.805,0,.34.34,0,0,1-.34-.34h0v-.449a.34.34,0,0,1,.34-.34,31.982,31.982,0,0,0,7.805,0,.34.34,0,0,1,.34.34v.449A.34.34,0,0,1,844.242,548.163Z"
            transform="translate(-708.302 -472.523)"
            fill="#3f3d56"
          />
          <path
            id="Path_1002"
            data-name="Path 1002"
            d="M8.55,2.415h0a2.693,2.693,0,0,1-3.307,2.9L0,4.053l.125-2.8L5.265.069A2.693,2.693,0,0,1,8.55,2.415Z"
            transform="translate(117.942 66.856) rotate(-45)"
            fill="#fbbebe"
          />
          <path
            id="Path_1003"
            data-name="Path 1003"
            d="M751.763,515.542l3.044,3.746-3.319,6.091-2.183,2.657,2.183-2.657,3.891-5.441.765-.392,3.263,6.673s-5.8,5.665-7.044,6.718a6.67,6.67,0,0,1-4.156,1.318c-.909-.065-3.133-.545-3.82-1.318a3.514,3.514,0,0,1-.853-2.832h0a8.922,8.922,0,0,1,1.051-2.828s2.91-5.384,4.721-8.2A34.736,34.736,0,0,1,751.763,515.542Z"
            transform="translate(-632.679 -449.149)"
            fill="#3f3d56"
          />
          <path
            id="Path_1004"
            data-name="Path 1004"
            d="M570.032,757.5h-33.86a1.135,1.135,0,0,1-1.135-1.135h0a153.043,153.043,0,0,1,36.13,0h0A1.135,1.135,0,0,1,570.032,757.5Z"
            transform="translate(-466.029 -642.749)"
            fill="#2f2e41"
          />
          <path
            id="Path_1005"
            data-name="Path 1005"
            d="M571.168,645.744l-36.13-.067,4.187-7.046.02-.033V623.07a1.435,1.435,0,0,1,1.435-1.435h24.644a1.435,1.435,0,0,1,1.435,1.435V638.7Z"
            transform="translate(-466.03 -532.059)"
            fill="#3f3d56"
          />
          <path
            id="Path_1006"
            data-name="Path 1006"
            d="M565.425,627.463a.468.468,0,0,0-.467.468v14.158a.468.468,0,0,0,.467.468h24.91a.468.468,0,0,0,.467-.468V627.93a.468.468,0,0,0-.467-.468Z"
            transform="translate(-490.807 -536.886)"
            fill="#fff"
          />
          <path
            id="Path_1007"
            data-name="Path 1007"
            d="M561.448,726.161a.2.2,0,0,0-.182.117l-1.29,2.8a.2.2,0,0,0,.182.284h27.133a.2.2,0,0,0,.179-.29l-1.4-2.8a.2.2,0,0,0-.179-.111Z"
            transform="translate(-486.666 -618.621)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_133"
            data-name="Ellipse 133"
            cx="0.301"
            cy="0.301"
            r="0.301"
            transform="translate(86.673 89.742)"
            fill="#fff"
          />
          <path
            id="Path_1008"
            data-name="Path 1008"
            d="M621.522,747.921a.2.2,0,0,0-.193.148l-.324,1.2a.2.2,0,0,0,.193.253h6.155a.2.2,0,0,0,.189-.266l-.416-1.2a.2.2,0,0,0-.189-.135Z"
            transform="translate(-537.216 -636.641)"
            fill="#2f2e41"
          />
          <path
            id="Path_1009"
            data-name="Path 1009"
            d="M456.316,672.346v.267H428.781l.021-.034v-.234Z"
            transform="translate(-355.585 -566.041)"
            fill="#2f2e41"
          />
          <path
            id="Path_1010"
            data-name="Path 1010"
            d="M491.439,549.709a30.1,30.1,0,0,0,1.406,8.321c.02.063.04.124.061.187h5.248c-.006-.056-.011-.119-.017-.187-.35-4.022-2.367-28.5.045-32.691C497.971,525.678,491.032,536.927,491.439,549.709Z"
            transform="translate(-429.411 -458.795)"
            fill="#58d06f"
          />
          <path
            id="Path_1011"
            data-name="Path 1011"
            d="M474.02,629.986c.044.063.09.125.136.187h3.937l-.1-.187c-.65-1.174-2.575-4.683-4.362-8.321-1.92-3.91-3.682-7.968-3.534-9.436C470.046,612.56,468.718,622.658,474.02,629.986Z"
            transform="translate(-411.598 -530.752)"
            fill="#58d06f"
          />
          <path
            id="Path_1012"
            data-name="Path 1012"
            d="M530.112,213.448l2.134-1.706a2.261,2.261,0,0,0-2.617,1.437,3.634,3.634,0,0,0-2.7.167l4.269,1.55a3.23,3.23,0,0,0-1.081-1.447Z"
            transform="translate(-458.811 -199.076)"
            fill="#3f3d56"
          />
          <path
            id="Path_1013"
            data-name="Path 1013"
            d="M904,162.343l2.133-1.706a2.261,2.261,0,0,0-2.617,1.437,3.634,3.634,0,0,0-2.7.167l4.269,1.55A3.23,3.23,0,0,0,904,162.343Z"
            transform="translate(-768.436 -156.755)"
            fill="#3f3d56"
          />
          <path
            id="Path_1014"
            data-name="Path 1014"
            d="M832.515,294.1l2.133-1.706a2.261,2.261,0,0,0-2.617,1.437,3.634,3.634,0,0,0-2.7.167l4.269,1.55A3.23,3.23,0,0,0,832.515,294.1Z"
            transform="translate(-709.241 -265.865)"
            fill="#3f3d56"
          />
          <ellipse
            id="Ellipse_134"
            data-name="Ellipse 134"
            cx="19.263"
            cy="39.305"
            rx="19.263"
            ry="39.305"
            transform="translate(6.619 -12.162) rotate(-10.221)"
            fill="#58d06f"
          />
          <path
            id="Path_1015"
            data-name="Path 1015"
            d="M301.5,226.981q2.542,6.911,4.523,14.01t3.384,14.329q1.406,7.233,2.229,14.564t1.053,14.685q.232,7.36-.128,14.722-.044.9-.1,1.8c-.036.616.922.613.958,0q.434-7.386.272-14.789-.163-7.361-.914-14.694-.753-7.354-2.087-14.634t-3.251-14.431q-1.914-7.146-4.4-14.122-.3-.851-.616-1.7C302.216,226.153,301.29,226.4,301.5,226.981Z"
            transform="translate(-272.107 -211.236)"
            fill="#3f3d56"
          />
          <path
            id="Path_1016"
            data-name="Path 1016"
            d="M335.773,273.582l4.243-9.42,1.2-2.655a.494.494,0,0,0-.172-.655.482.482,0,0,0-.655.172l-4.243,9.42-1.2,2.655a.493.493,0,0,0,.172.655A.483.483,0,0,0,335.773,273.582Z"
            transform="translate(-299.779 -239.713)"
            fill="#3f3d56"
          />
          <path
            id="Path_1017"
            data-name="Path 1017"
            d="M282.842,350.2l-9.674-3.627-2.727-1.022a.483.483,0,0,0-.589.334.489.489,0,0,0,.334.589l9.674,3.627,2.727,1.022a.483.483,0,0,0,.589-.334.489.489,0,0,0-.334-.589Z"
            transform="translate(-245.911 -309.893)"
            fill="#3f3d56"
          />
          <path
            id="Path_1018"
            data-name="Path 1018"
            d="M301.672,663.423s11.651-3.83,22.5,0"
            transform="translate(-272.273 -571.738)"
            fill="#e6e6e6"
          />
          <path
            id="Path_1019"
            data-name="Path 1019"
            d="M602.6,655.5c2.309-.024,4.617-.065,6.926-.1q1.154-.016,2.309-.028a.516.516,0,0,0,0-1.031c-2.309.024-4.617.065-6.926.1q-1.154.016-2.309.027A.516.516,0,0,0,602.6,655.5Z"
            transform="translate(-521.566 -559.146)"
            fill="#58d06f"
          />
          <path
            id="Path_1020"
            data-name="Path 1020"
            d="M602.6,669.5l9.331-.1,2.654-.028a.516.516,0,0,0,0-1.031l-9.331.1-2.654.028A.516.516,0,0,0,602.6,669.5Z"
            transform="translate(-521.566 -570.74)"
            fill="#58d06f"
          />
          <path
            id="Path_1021"
            data-name="Path 1021"
            d="M602.6,683.5l9.331-.1,2.654-.027a.516.516,0,0,0,0-1.031l-9.331.1-2.654.027A.516.516,0,0,0,602.6,683.5Z"
            transform="translate(-521.566 -582.334)"
            fill="#58d06f"
          />
        </g>
      </svg>
    ),
    solution: {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="169"
          height="116.001"
          viewBox="0 0 169 116.001"
        >
          <g id="Group_424" data-name="Group 424" transform="translate(0 0.031)">
            <circle
              id="Ellipse_141"
              data-name="Ellipse 141"
              cx="24.255"
              cy="24.255"
              r="24.255"
              transform="translate(0 67.459)"
              fill="#f2f2f2"
            />
            <path
              id="Path_1022"
              data-name="Path 1022"
              d="M166.669,215.471a51.249,51.249,0,1,1,36.239-15.011A51.249,51.249,0,0,1,166.669,215.471Zm0-102.107a50.858,50.858,0,1,0,50.858,50.858,50.916,50.916,0,0,0-50.858-50.858Z"
              transform="translate(-113.072 -112.998)"
              fill="#2f2e41"
            />
            <path
              id="Path_1023"
              data-name="Path 1023"
              d="M207.45,166.561l-.006,0-25.259,14.065-27.66-13.83-.477-.238,1.436-28.71,24.978-17.8.276.172,25.851,16.193Z"
              transform="translate(-127.153 -99.115)"
              fill="#58d06f"
            />
            <path
              id="Path_1024"
              data-name="Path 1024"
              d="M209.7,306.366l-25.259,14.065-27.66-13.83,24.5-17.177Z"
              transform="translate(-129.406 -238.918)"
              opacity="0.3"
            />
            <path
              id="Path_1025"
              data-name="Path 1025"
              d="M325.535,167.375l-28.423-16.939,1.711-29.4,25.851,16.193Z"
              transform="translate(-245.238 -99.93)"
              opacity="0.1"
            />
            <path
              id="Path_1026"
              data-name="Path 1026"
              d="M159.5,187.526l-.14-.2L184.618,169.5l26.68,16.728-.129.206-26.543-16.642Z"
              transform="translate(-131.538 -139.932)"
              fill="#f2f2f2"
            />
            <path
              id="Path_1027"
              data-name="Path 1027"
              d="M156.716,247l-.137-.2,25.129-17.06.066.037,27.251,15.445-.12.212-27.185-15.407Z"
              transform="translate(-129.241 -189.657)"
              fill="#f2f2f2"
            />
            <path
              id="Path_1028"
              data-name="Path 1028"
              d="M211.67,198.577l-.128-.207,25.325-15.693V152.594h.243v30.219Z"
              transform="translate(-174.608 -125.977)"
              fill="#f2f2f2"
            />
            <path
              id="Path_1029"
              data-name="Path 1029"
              d="M268.6,230.195l-.129-.206,24.385-15.295V184.879h.243v29.949Z"
              transform="translate(-221.596 -152.626)"
              fill="#f2f2f2"
            />
            <path
              id="Path_1030"
              data-name="Path 1030"
              d="M273.536,201.623l-28.36-15.757,0-.076,1.493-29.509.243.012-1.489,29.433,28.228,15.684Z"
              transform="translate(-202.37 -129.021)"
              fill="#f2f2f2"
            />
            <path
              id="Path_1031"
              data-name="Path 1031"
              d="M223.937,235.039l-28.042-14.7,0-.078,1.653-29.524.243.014L196.147,220.2l27.9,14.622Z"
              transform="translate(-161.693 -157.465)"
              fill="#f2f2f2"
            />
            <circle
              id="Ellipse_142"
              data-name="Ellipse 142"
              cx="9.78"
              cy="9.78"
              r="9.78"
              transform="translate(75.309 1.344)"
              fill="#3f3d56"
            />
            <rect
              id="Rectangle_1146"
              data-name="Rectangle 1146"
              width="168.223"
              height="0.391"
              transform="translate(0.777 115.579)"
              fill="#2f2e41"
            />
            <path
              id="Path_1032"
              data-name="Path 1032"
              d="M986.137,470.136l2.236,6.124s-1.512,4.608.821,4.8,1.8-4.316,1.8-4.316l-1.264-7.387Z"
              transform="translate(-843.195 -409.341)"
              fill="#ffb9b9"
            />
            <path
              id="Path_1033"
              data-name="Path 1033"
              d="M983.071,359.128l1.652,1.652.28,9.607s.511,5.444.608,6.475a40.981,40.981,0,0,1,1.22,7.958H983.77L982,378.374l-.875-10.984Z"
              transform="translate(-839.06 -318.356)"
              fill="#3f3d56"
            />
            <path
              id="Path_1035"
              data-name="Path 1035"
              d="M829.883,187.953,829.3,194.7l5.929,1.013.437-3.882.438-3.882Z"
              transform="translate(-695.932 -157.339)"
              fill="#ffb9b9"
            />
            <path
              id="Path_1037"
              data-name="Path 1037"
              d="M0,0,3.3,7.1A6.479,6.479,0,0,0,4.493,9.82a2.036,2.036,0,0,0,2.671.423C8.078,9.559,6.512,7.1,6.512,7.1L5.346,5.249,3.985,0Z"
              transform="translate(120.888 57.568) rotate(20)"
              fill="#ffb9b9"
            />
            <path
              id="Path_1038"
              data-name="Path 1038"
              d="M877.182,486.248v3.2s-2.714,40.108-2.325,39.817,0,.208.489-.569,3.5,0,3.5,0l.891-1.64.364-1.991c0-.292,3.994-22.225,3.994-22.225v5.638s-.3,20.737,1.447,20.542a11.6,11.6,0,0,0,3.573-1.173s6.158-38.906,4.6-40.364-2.236-4.763-2.236-4.763Z"
              transform="translate(-750.192 -420.37)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_143"
              data-name="Ellipse 143"
              cx="4.666"
              cy="4.666"
              r="4.666"
              transform="translate(132.542 24.266)"
              fill="#ffb9b9"
            />
            <path
              id="Path_1039"
              data-name="Path 1039"
              d="M859.581,337.8l-.68-.389a11.026,11.026,0,0,0-3.985,6.61,114.026,114.026,0,0,0-1.7,12.48,8.643,8.643,0,0,0,.282,1.857l.733,7.511,2.576-1.336,1.1-8.251s3.235-11.97,3.235-12.164S859.581,337.8,859.581,337.8Z"
              transform="translate(-732.774 -300.435)"
              fill="#3f3d56"
            />
            <path
              id="Path_1041"
              data-name="Path 1041"
              d="M892.2,494.411l-1.264,2.333a39.028,39.028,0,0,1,5.152.972c1.361.486,4.86,1.166,4.86,1.166l.875-3.4Z"
              transform="translate(-764.617 -430.02)"
              fill="#3f3d56"
            />
            <path
              id="Path_1042"
              data-name="Path 1042"
              d="M859.641,384.354l1.935,3.368,7.739-.919-.879-3.164Z"
              transform="translate(-725.303 -318.86)"
              fill="#3f3d56"
            />
            <path
              id="Path_1043"
              data-name="Path 1043"
              d="M902.627,314.072c-.575.532-2.107,2.272-3.176,1.106a31.366,31.366,0,0,1-2.213-2.824l-1.677.435-5.735,2.041.486,13.122.879,6.412v4.024a30.387,30.387,0,0,1-.588,4.047s8.262,3.694,16.913.486l-.972-3.694-.486-8.262a6.018,6.018,0,0,0,.389-1.944c-.1-.583,2.916-8.748,2.916-8.748s-.486-4.082-3.013-4.957-3.056-1.69-3.056-1.69S903.2,313.54,902.627,314.072Z"
              transform="translate(-763.699 -277.849)"
              fill="#3f3d56"
            />
            <ellipse
              id="Ellipse_144"
              data-name="Ellipse 144"
              cx="0.437"
              cy="0.583"
              rx="0.437"
              ry="0.583"
              transform="translate(140.658 29.369)"
              fill="#ffb9b9"
            />
            <path
              id="Path_1045"
              data-name="Path 1045"
              d="M941.7,737.951l.684,2.051a6.98,6.98,0,0,0,.684,3.076c.684,1.025,1.367,3.247-1.367,3.418a5.7,5.7,0,0,1-3.931-.854s.513-1.367,0-1.88,0-1.538,0-1.538l.513-4.1Z"
              transform="translate(-803.087 -631.039)"
              fill="#2f2e41"
            />
            <path
              id="Path_1046"
              data-name="Path 1046"
              d="M875.739,737.951,875.056,740a6.981,6.981,0,0,1-.684,3.076c-.684,1.025-1.367,3.247,1.367,3.418a5.7,5.7,0,0,0,3.931-.854s-.513-1.367,0-1.88,0-1.538,0-1.538l-.513-4.1Z"
              transform="translate(-750.439 -631.039)"
              fill="#2f2e41"
            />
            <path
              id="Path_1047"
              data-name="Path 1047"
              d="M828.122,442.222s-2.6-8.521,5.354-6.734a6.09,6.09,0,0,1,3.149,1.933.767.767,0,0,0,.6.245c1.271,0,2.056,4.543-.486,6.54,0,0,.519-2.688-.424-3.6a2.023,2.023,0,0,1-.42-.54c-.614-1.238-2.677-1.644-4.1-1.539-.726.054-.79,1.32-1.594,1.143C828.371,439.263,827.786,441.383,828.122,442.222Z"
              transform="translate(-695.41 -413.239)"
              fill="#2f2e41"
            />
          </g>
        </svg>
      ),
      data: [
        {
          title: 'Analysis',
          para: [
            'A market research consisting of study about the competition, current trends and the impacts of human consumables on eco-system helped in coming up with a design that truly defines the brand and its goals.',
            'With consideration to the brand needs and my personal knowledge and skills, I finalized with right technologies that this project should use for its design and development. I will explain briefly about the use of technology and the processes I went through in completing the project in the upcoming parts of this case study.',
          ],
        },
        {
          title: 'Project Architecture',
          greyBG: true,
          caption: 'Sitemap for Essence Natural',
          para: [
            'Based on the market analysis and the brand needs, I structured a sitemap that best suits in fulfilling the market needs and results in an overall better user flow experience.',
          ],
          imageLink: [
            {
              src: '/essence sitemap@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/essence%20sitemap%402x.pdf',
            },
          ],
        },
        {
          title: 'Wireframing & Low-fidelity Prototyping',
          para: [
            'After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype.',
          ],
          imageLink: [
            {
              src: '/lo-fi-proto_essence@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/lo-fi-proto_essence%402x.pdf',
            },
          ],
        },
        {
          title: 'Designing Elements',
          para: [
            'Based on the wireframes and test results, I created a style guide which helped me in creating various design elements for the final design.',
          ],
          imageLink: [
            {
              src: '/styleGuide Essence@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/styleGuide%20Essence%402x.pdf',
            },
            {
              src: '/final Design essence@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/final%20Design%20essence%402x.pdf',
            },
          ],
        },
        {
          title: 'High-fidelity Prototyping',
          para: [
            'After the final design has been created, I implemented the final high-fidelity prototypes which further clarified the overall user flow of the project. The finalized design got tested by several groups of people which helped in finding the unknown issues in the prototype and improve the overall experience.',
          ],
          imageLink: [
            {
              src: '/high-fi-proto_essence@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/high-fi-proto_essence%402x.pdf',
            },
          ],
        },
        {
          mainTitle: 'Development',
          svg: (
            <svg
              id="Group_425"
              data-name="Group 425"
              xmlns="http://www.w3.org/2000/svg"
              width="157.516"
              height="119.627"
              viewBox="0 0 157.516 119.627"
            >
              <path
                id="Path_1049"
                data-name="Path 1049"
                d="M346.759,84.54c-6.923-27.224-30.845-46.875-58.924-47.663C272.991,36.46,257.371,41.384,246,58.612c-20.33,30.8,1.249,52.079,16.294,62.192a94.138,94.138,0,0,1,19.458,17.489c10.162,12.059,29.712,27.044,52.995,3.565C351.62,124.84,351.371,102.674,346.759,84.54Z"
                transform="translate(-211.396 -36.853)"
                fill="#f2f2f2"
              />
              <path
                id="Path_1050"
                data-name="Path 1050"
                d="M719.6,314.028l14.246-14.2-14.246-14.2,4.343-4.329,18.589,18.531-18.589,18.531-4.343-4.329Z"
                transform="translate(-615.42 -240.57)"
                opacity="0.1"
              />
              <path
                id="Path_1051"
                data-name="Path 1051"
                d="M494.6,418.938h5.791v-5.791H494.6Zm29.071-5.791H517.88v5.791h5.791Zm-17.431,5.791h5.791v-5.791H506.24Z"
                transform="translate(-431.101 -358.669)"
                opacity="0.1"
              />
              <path
                id="Path_1052"
                data-name="Path 1052"
                d="M248.932,313.028l-14.26-14.2,14.246-14.2-4.343-4.329L226,298.825l18.589,18.531Z"
                transform="translate(-193.281 -239.714)"
                opacity="0.1"
              />
              <path
                id="Path_1053"
                data-name="Path 1053"
                d="M213.516,784.937c0,2.4-35.261,10.713-78.758,10.713S56,787.336,56,784.937s35.261,2.027,78.758,2.027S213.516,782.538,213.516,784.937Z"
                transform="translate(-56 -676.023)"
                fill="#3f3d56"
              />
              <path
                id="Path_1054"
                data-name="Path 1054"
                d="M213.516,784.937c0,2.4-35.261,10.713-78.758,10.713S56,787.336,56,784.937s35.261,2.027,78.758,2.027S213.516,782.538,213.516,784.937Z"
                transform="translate(-56 -676.023)"
                opacity="0.1"
              />
              <ellipse
                id="Ellipse_145"
                data-name="Ellipse 145"
                cx="78.758"
                cy="4.343"
                rx="78.758"
                ry="4.343"
                transform="translate(0 104.57)"
                fill="#3f3d56"
              />
              <path
                id="Path_1055"
                data-name="Path 1055"
                d="M688.7,644.806c0,9.268,5.814,16.767,13,16.767"
                transform="translate(-597.097 -556.789)"
                fill="#3f3d56"
              />
              <path
                id="Path_1056"
                data-name="Path 1056"
                d="M778.487,660.461c0-9.372,6.488-16.956,14.507-16.956"
                transform="translate(-673.889 -555.677)"
                fill="#58d06f"
              />
              <path
                id="Path_1057"
                data-name="Path 1057"
                d="M721.229,650.609c0,8.8,3.708,15.927,8.29,15.927"
                transform="translate(-624.92 -561.752)"
                fill="#58d06f"
              />
              <path
                id="Path_1058"
                data-name="Path 1058"
                d="M778.487,632.638c0-11.975,7.5-21.666,16.767-21.666"
                transform="translate(-673.889 -527.854)"
                fill="#3f3d56"
              />
              <path
                id="Path_1059"
                data-name="Path 1059"
                d="M759.6,755.555a6.758,6.758,0,0,0,2.4-.452c.556-.4,2.836-.868,2.974-.234s2.771,3.156.689,3.173a17.631,17.631,0,0,1-5.391-.662C759.714,757.042,759.6,755.555,759.6,755.555Z"
                transform="translate(-657.733 -650.653)"
                fill="#a8a8a8"
              />
              <path
                id="Path_1060"
                data-name="Path 1060"
                d="M765.7,763.692a17.626,17.626,0,0,1-5.391-.662c-.422-.257-.591-1.18-.647-1.606l-.061,0s.117,1.487.671,1.825a17.627,17.627,0,0,0,5.391.662c.6,0,.808-.219.8-.535C766.372,763.569,766.143,763.688,765.7,763.692Z"
                transform="translate(-657.733 -656.524)"
                opacity="0.2"
              />
              <path
                id="Path_1061"
                data-name="Path 1061"
                d="M893.071,405.428s-4.457-3.384-4.8-2.144,3.271,4.06,3.271,4.06Z"
                transform="translate(-767.763 -350)"
                fill="#ffb9b9"
              />
              <path
                id="Path_1062"
                data-name="Path 1062"
                d="M893.071,405.428s-4.457-3.384-4.8-2.144,3.271,4.06,3.271,4.06Z"
                transform="translate(-767.763 -350)"
                opacity="0.1"
              />
              <path
                id="Path_1068"
                data-name="Path 1068"
                d="M719.6,295.028l14.246-14.2-14.246-14.2,4.343-4.329,18.589,18.531-18.589,18.531-4.343-4.329Z"
                transform="translate(-615.42 -224.32)"
                fill="#58d06f"
              />
              <path
                id="Path_1080"
                data-name="Path 1080"
                d="M494.6,399.938h5.791v-5.791H494.6Zm29.071-5.791H517.88v5.791h5.791Zm-17.431,5.791h5.791v-5.791H506.24Z"
                transform="translate(-431.101 -342.42)"
                fill="#58d06f"
              />
              <path
                id="Path_1111"
                data-name="Path 1111"
                d="M4.41,0C6.846,0,8.467,1,8.467,3.094S6.846,7.6,4.41,7.6,0,5.9,0,3.8,1.975,0,4.41,0Z"
                transform="translate(24.519 26.868)"
                fill="#2f2e41"
              />
              <path
                id="Path_1081"
                data-name="Path 1081"
                d="M265.625,426.865s4.385.292,5.165-.292,4.093.78,4.385,1.559-4.678.877-5.457.877a35.851,35.851,0,0,0-4.483,1.169Z"
                transform="translate(-234.943 -370.03)"
                fill="#ffb9b9"
              />
              <path
                id="Path_1082"
                data-name="Path 1082"
                d="M197.958,740.5s-2.044,5.154-.977,5.776,12.263.178,12.263.178,1.866-1.155-.267-1.955a7.321,7.321,0,0,1-2.932-.8,16.992,16.992,0,0,1-2.488-2.044s-.089-1.955-.8-1.511a1.827,1.827,0,0,0-.8,1.244Z"
                transform="translate(-176.306 -638.273)"
                fill="#2f2e41"
              />
              <path
                id="Path_1083"
                data-name="Path 1083"
                d="M197.958,740.5s-2.044,5.154-.977,5.776,12.263.178,12.263.178,1.866-1.155-.267-1.955a7.321,7.321,0,0,1-2.932-.8,16.992,16.992,0,0,1-2.488-2.044s-.089-1.955-.8-1.511a1.827,1.827,0,0,0-.8,1.244Z"
                transform="translate(-176.306 -638.273)"
                opacity="0.1"
              />
              <path
                id="Path_1084"
                data-name="Path 1084"
                d="M248.932,294.028l-14.26-14.2,14.246-14.2-4.343-4.329L226,279.825l18.589,18.531Z"
                transform="translate(-193.281 -223.465)"
                fill="#58d06f"
              />
              <path
                id="Path_1085"
                data-name="Path 1085"
                d="M175.456,751.154s-2.241,5.652-1.072,6.335,13.449.195,13.449.195,2.047-1.267-.292-2.144a8.027,8.027,0,0,1-3.216-.877,18.626,18.626,0,0,1-2.729-2.241s-.1-2.144-.877-1.657a2,2,0,0,0-.877,1.364Z"
                transform="translate(-156.956 -647.346)"
                fill="#2f2e41"
              />
              <path
                id="Path_1086"
                data-name="Path 1086"
                d="M216.01,491.775l-1.364,12.279s-.487,5.847-1.949,7.114a5.51,5.51,0,0,1-.487,2.436l-.682,7.7a17.762,17.762,0,0,1,.877,3.313c-.1.487.39,2.047.292,2.241a37.454,37.454,0,0,1-4.678,0l.975-15.69,3.021-21.83Z"
                transform="translate(-186.01 -423.83)"
                fill="#2f2e41"
              />
              <path
                id="Path_1087"
                data-name="Path 1087"
                d="M216.01,491.775l-1.364,12.279s-.487,5.847-1.949,7.114a5.51,5.51,0,0,1-.487,2.436l-.682,7.7a17.762,17.762,0,0,1,.877,3.313c-.1.487.39,2.047.292,2.241a37.454,37.454,0,0,1-4.678,0l.975-15.69,3.021-21.83Z"
                transform="translate(-186.01 -423.83)"
                opacity="0.1"
              />
              <path
                id="Path_1088"
                data-name="Path 1088"
                d="M183.649,488.507s-1.072,10.038-1.559,12.182a27.717,27.717,0,0,0-.585,4.288s-.1,3.119-.975,4a2.634,2.634,0,0,0-.78,1.949s-.877,9.843-.39,11.012.975,2.144.487,2.924-5.847.78-5.847.195,0-1.072-.292-1.364,0-2.144,0-2.144-1.169-8.673-.1-11.207,1.559-9.453,1.559-9.453-.78-7.894-1.754-9.161.195-5.75.195-5.75Z"
                transform="translate(-156.086 -420.952)"
                fill="#2f2e41"
              />
              <path
                id="Path_1089"
                data-name="Path 1089"
                d="M226.415,271.606l-.878.7,1.408.469a16.8,16.8,0,0,1,3.91,2.431,4.471,4.471,0,0,1,.177-3.024,1.559,1.559,0,0,0,.225-1.018,1.267,1.267,0,0,0-.494-.591,15.326,15.326,0,0,0-1.507-1.028c-.365-.218-1.115-.8-1.534-.736a3.89,3.89,0,0,1-.281,1.6A13.727,13.727,0,0,1,226.415,271.606Z"
                transform="translate(-201.595 -235.222)"
                fill="#ffb9b9"
              />
              <path
                id="Path_1110"
                data-name="Path 1110"
                d="M4,0C6.2,0,7.7,1.161,7.7,3.368S6.2,7.991,4,7.991A4,4,0,0,1,4,0Z"
                transform="translate(24.884 29.183)"
                fill="#ffb9b9"
              />
              <path
                id="Path_1090"
                data-name="Path 1090"
                d="M180.638,295.618c-.21-1.887-.241-4.987-1.9-5.93s-3.549-2-4.746-2.043c0,0-5.985,1.385-6.569,6.647a68.7,68.7,0,0,0,.39,12.961s.155,6.933-.917,10.539c0,0-1.909.571,1.989-.6s10.72,3.313,10.72,3.313.682-.682.682-1.169.354-4.175.354-4.175-.045-12.421,0-13.69A44.648,44.648,0,0,0,180.638,295.618Z"
                transform="translate(-149.997 -250.614)"
                fill="#3f3d56"
              />
              <path
                id="Path_1092"
                data-name="Path 1092"
                d="M185.378,391.851s-.682,4.288,2.144,3.9c0,0,1.462-.195,1.657,0s7.406-1.072,8.381-2.144c0,0,1.169-.39,1.754.195s6.432,1.169,4.678-.585a8.924,8.924,0,0,0-4.483-2.144l-3.7.195a5.234,5.234,0,0,1-3.119,0c-1.169-.585-4.483-.39-4.483-.39Z"
                transform="translate(-166.585 -339.596)"
                fill="#ffb9b9"
              />
              <path
                id="Path_1093"
                data-name="Path 1093"
                d="M187.5,304.226s-4.385.487-4.385,6.822v8.089a6.887,6.887,0,0,0,.6,1.651,1.919,1.919,0,0,0,.873.8s.567.262.587.266c.5.277-.755-.257,1.028-.118a8.653,8.653,0,0,0,2.62,0c2.107-.34,5.033-1.219,5.2-1.186.487.1,0-3.31,0-3.31s-5.713-.833-6.864-.728c-.278.025.509-2.327.724-3.531C188.451,309.758,189.713,304.374,187.5,304.226Z"
                transform="translate(-164.709 -265.517)"
                fill="#3f3d56"
                stroke="#3c3b4e"
                strokeWidth="0.1"
              />
              <path
                id="Path_1105"
                data-name="Path 1105"
                d="M828.94,442.2s-2.725-8.241,4.039-6.722a4.39,4.39,0,0,1,2.631,1.012l.557.631c1.08,0,.344,1.42.138,2.6,0,0,.313.481-.488-.3a1.718,1.718,0,0,1-.357-.459c-.522-1.052-2.4-.78-3.607-.691-.618.046-.551,2.657-1.234,2.506C829.116,438.831,828.655,441.486,828.94,442.2Z"
                transform="translate(-803.936 -408.68)"
                fill="#2f2e41"
              />
            </svg>
          ),
        },
        {
          title: 'Choosing the right technology',
          para: [
            'For the Essence Naturals Ecommerce Web app, I used the Javascript library React.JS along with CSS3 and JSX/HTML for the frontend, Express JS, a Node.JS framework for the backend with MongoDB as the database management system, Firebase and Google App Engine for hosting the front-end and back-end respectively and Stripe as the payment gateway.',
          ],
          horizontalItems: [
            {
              type: 'svg',
              items: [
                {
                  data: (
                    <svg
                      id="Group_426"
                      data-name="Group 426"
                      xmlns="http://www.w3.org/2000/svg"
                      width="69.387"
                      height="69.387"
                      viewBox="0 0 69.387 69.387"
                    >
                      <g id="Group_72" data-name="Group 72" transform="translate(0)">
                        <path
                          id="Path_178"
                          data-name="Path 178"
                          d="M34.694,0A34.694,34.694,0,1,1,0,34.694,34.694,34.694,0,0,1,34.694,0Z"
                          fill="#f1fbff"
                        />
                      </g>
                      <g id="Group_58" data-name="Group 58" transform="translate(5.758 9.357)">
                        <g id="react">
                          <path
                            id="Path_170"
                            data-name="Path 170"
                            d="M.754,26.234c0,4.291,4.19,8.3,10.8,10.554-1.319,6.641-.236,11.993,3.38,14.078,3.717,2.144,9.255.66,14.511-3.935,5.123,4.409,10.3,6.144,13.914,4.053,3.714-2.15,4.843-7.865,3.487-14.713C53.722,34,57.57,30.581,57.57,26.234c0-4.191-4.2-7.817-10.714-10.06,1.459-7.131.223-12.353-3.543-14.525C39.682-.445,34.444,1.38,29.246,5.9,23.837,1.1,18.651-.364,14.889,1.813c-3.627,2.1-4.662,7.55-3.339,14.313C5.167,18.352.754,22.06.754,26.234Z"
                            transform="translate(-0.754 -0.785)"
                            fill="rgba(255,255,255,0)"
                          />
                          <path
                            id="Path_171"
                            data-name="Path 171"
                            d="M56.73,29.065q-.806-.276-1.624-.512.136-.552.251-1.108c1.23-5.969.426-10.777-2.32-12.36-2.632-1.518-6.937.065-11.285,3.848q-.643.56-1.256,1.153-.411-.394-.836-.772c-4.557-4.046-9.124-5.751-11.866-4.163-2.63,1.522-3.409,6.043-2.3,11.7q.165.84.373,1.671c-.646.184-1.27.379-1.868.587-5.342,1.862-8.754,4.781-8.754,7.809,0,3.127,3.662,6.264,9.227,8.165q.677.23,1.364.427-.223.895-.4,1.8c-1.055,5.558-.231,9.971,2.392,11.484,2.709,1.562,7.256-.044,11.683-3.913q.525-.459,1.053-.971.665.641,1.364,1.245c4.288,3.69,8.524,5.18,11.144,3.663,2.706-1.567,3.586-6.308,2.444-12.076q-.131-.661-.3-1.349.479-.141.938-.293c5.785-1.916,9.548-5.015,9.548-8.184,0-3.039-3.522-5.977-8.971-7.853Z"
                            transform="translate(-12.007 -11.448)"
                            fill="#53c1de"
                          />
                          <path
                            id="Path_172"
                            data-name="Path 172"
                            d="M62.972,50.536c-.276.091-.559.18-.847.265a50.591,50.591,0,0,0-2.555-6.392,50.57,50.57,0,0,0,2.456-6.3c.516.15,1.017.307,1.5.473,4.669,1.607,7.517,3.984,7.517,5.815,0,1.951-3.076,4.483-8.07,6.138ZM60.9,54.642a18.252,18.252,0,0,1,.243,6.66,4.454,4.454,0,0,1-1.652,3.132c-1.59.92-4.991-.276-8.658-3.432q-.631-.543-1.269-1.157a50.654,50.654,0,0,0,4.229-5.371,50.32,50.32,0,0,0,6.834-1.053Q60.78,54.045,60.9,54.642ZM39.942,64.275a4.454,4.454,0,0,1-3.539.133c-1.592-.918-2.253-4.462-1.351-9.215q.161-.843.368-1.675a50.685,50.685,0,0,0,6.8.984,52.452,52.452,0,0,0,4.331,5.351q-.47.454-.961.885a18.256,18.256,0,0,1-5.648,3.536ZM32.663,50.524A18.261,18.261,0,0,1,26.778,47.4a4.455,4.455,0,0,1-1.883-3c0-1.837,2.739-4.181,7.308-5.774q.86-.3,1.737-.546A51.7,51.7,0,0,0,36.4,44.451a52.483,52.483,0,0,0-2.49,6.463Q33.282,50.734,32.663,50.524ZM35.1,33.916c-.948-4.846-.319-8.5,1.266-9.42,1.688-.977,5.421.416,9.355,3.909.251.223.5.457.757.7a51.653,51.653,0,0,0-4.3,5.319,52.669,52.669,0,0,0-6.733,1.046q-.193-.773-.347-1.555Zm21.765,5.374q-.74-1.278-1.534-2.523c1.61.2,3.152.473,4.6.8a45.978,45.978,0,0,1-1.615,4.345q-.7-1.327-1.451-2.626Zm-8.876-8.645a46.1,46.1,0,0,1,2.969,3.585q-2.98-.141-5.964,0c.98-1.293,1.985-2.494,2.994-3.583Zm-8.933,8.66q-.742,1.288-1.424,2.609c-.628-1.489-1.165-2.953-1.6-4.366,1.44-.322,2.975-.586,4.574-.785q-.8,1.253-1.547,2.542Zm1.593,12.881A45.9,45.9,0,0,1,36,51.439c.445-1.439.994-2.934,1.636-4.455q.684,1.322,1.431,2.611.761,1.314,1.584,2.591Zm7.4,6.116c-1.022-1.1-2.041-2.322-3.036-3.633q1.449.057,2.952.057,1.543,0,3.046-.068A45.841,45.841,0,0,1,48.052,58.3Zm10.288-11.4a45.779,45.779,0,0,1,1.694,4.439,45.739,45.739,0,0,1-4.707.8q.8-1.268,1.549-2.568Q57.639,48.26,58.341,46.907ZM55.01,48.5q-1.147,1.992-2.421,3.906c-1.5.107-3.044.162-4.621.162s-3.1-.049-4.568-.144q-1.307-1.908-2.466-3.912T38.781,44.45q1-2.074,2.146-4.068h0q1.149-1.993,2.447-3.895c1.5-.113,3.039-.173,4.595-.173s3.1.06,4.6.174q1.284,1.9,2.431,3.882t2.175,4.049Q56.167,46.5,55.01,48.5Zm4.447-24.071c1.69.975,2.347,4.9,1.285,10.057q-.1.5-.227,1a51.639,51.639,0,0,0-6.747-1.066A50.636,50.636,0,0,0,49.5,29.1q.567-.546,1.16-1.064C54.389,24.8,57.87,23.518,59.457,24.433Z"
                            transform="translate(-19.504 -18.928)"
                            fill="#f1fbff"
                          />
                          <path
                            id="Path_173"
                            data-name="Path 173"
                            d="M112.55,94.665a4.506,4.506,0,1,1-4.506,4.506,4.506,4.506,0,0,1,4.506-4.506"
                            transform="translate(-84.085 -73.701)"
                            fill="#53c1de"
                          />
                        </g>
                      </g>
                    </svg>
                  ),
                  caption: 'React JS',
                },
                {
                  data: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="69"
                      height="70"
                      viewBox="0 0 69 70"
                    >
                      <g id="Group_427" data-name="Group 427" transform="translate(-0.488)">
                        <rect
                          id="Rectangle_211"
                          data-name="Rectangle 211"
                          width="69"
                          height="70"
                          rx="34.5"
                          transform="translate(0.488)"
                          fill="#f9fff3"
                        />
                        <g id="nodejs-icon" transform="translate(19.409 18.216)">
                          <path
                            id="Path_166"
                            data-name="Path 166"
                            d="M14.417.942a2.806,2.806,0,0,1,2.74,0q6.256,3.535,12.513,7.068a2.576,2.576,0,0,1,1.3,2.218V24.407a2.6,2.6,0,0,1-1.4,2.267Q23.337,30.189,17.1,33.708a2.727,2.727,0,0,1-2.77-.077q-1.869-1.084-3.741-2.163a2.2,2.2,0,0,1-.722-.52c.159-.214.443-.241.674-.335a8.732,8.732,0,0,0,1.476-.689.344.344,0,0,1,.384.023c1.066.611,2.122,1.24,3.191,1.845.228.132.459-.043.654-.152q6.119-3.458,12.243-6.909a.4.4,0,0,0,.222-.4q0-7.016,0-14.033a.439.439,0,0,0-.261-.437q-6.214-3.5-12.425-7a.432.432,0,0,0-.488,0Q9.33,6.361,3.119,9.865a.433.433,0,0,0-.263.435q0,7.016,0,14.034a.4.4,0,0,0,.225.394Q4.74,25.668,6.4,26.6a2.564,2.564,0,0,0,2.075.278A1.574,1.574,0,0,0,9.493,25.4c.006-4.65,0-9.3,0-13.95a.35.35,0,0,1,.381-.358c.531,0,1.063-.007,1.594,0a.368.368,0,0,1,.347.425c0,4.68.006,9.359,0,14.039a3.56,3.56,0,0,1-1.665,3.214,5.126,5.126,0,0,1-4.582-.126C4.354,28.04,3.195,27.324,2,26.674A2.6,2.6,0,0,1,.6,24.407V10.228A2.581,2.581,0,0,1,1.949,7.981Q8.183,4.463,14.417.942Z"
                            transform="translate(-0.603 -0.584)"
                            fill="#8cc84b"
                          />
                          <path
                            id="Path_167"
                            data-name="Path 167"
                            d="M109.8,85.648a9.837,9.837,0,0,1,5.385.824A4.072,4.072,0,0,1,117.173,90a.381.381,0,0,1-.414.281c-.526,0-1.052.007-1.578,0a.407.407,0,0,1-.381-.394,2.4,2.4,0,0,0-1.149-1.66,6.812,6.812,0,0,0-3.153-.451,4.28,4.28,0,0,0-2.257.562,1.43,1.43,0,0,0-.476,1.6c.169.4.633.531,1.012.65,2.185.571,4.5.515,6.643,1.266a3.127,3.127,0,0,1,2.059,1.831,3.912,3.912,0,0,1-.663,3.733,5.23,5.23,0,0,1-2.808,1.513,13.49,13.49,0,0,1-4.238.18,6.679,6.679,0,0,1-3.728-1.4,3.913,3.913,0,0,1-1.26-3.086.353.353,0,0,1,.387-.312c.53,0,1.059-.006,1.589,0a.371.371,0,0,1,.379.367,2.408,2.408,0,0,0,.9,1.69,6.794,6.794,0,0,0,3.66.666,4.97,4.97,0,0,0,3-.734,1.658,1.658,0,0,0,.451-1.583c-.129-.468-.618-.686-1.038-.828-2.157-.682-4.5-.435-6.633-1.206a3.228,3.228,0,0,1-2.039-1.777,3.639,3.639,0,0,1,.727-3.786,5.866,5.866,0,0,1,3.641-1.463Z"
                            transform="translate(-92.363 -75.469)"
                            fill="#8cc84b"
                          />
                        </g>
                      </g>
                    </svg>
                  ),
                  caption: 'Node JS',
                },
                {
                  data: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                    >
                      <g id="Group_447" data-name="Group 447" transform="translate(-0.14)">
                        <rect
                          id="Rectangle_213"
                          data-name="Rectangle 213"
                          width="70"
                          height="70"
                          rx="35"
                          transform="translate(0.14)"
                          fill="rgba(88,170,80,0.08)"
                        />
                        <g id="mongodb" transform="translate(26.784 16.943)">
                          <path
                            id="Path_155"
                            data-name="Path 155"
                            d="M26.185,49.15l-.947-.324s.116-4.827-1.617-5.174c-1.155-1.34.185-56.822,4.343-.185a3.377,3.377,0,0,0-1.686,1.94A17.816,17.816,0,0,0,26.185,49.15Z"
                            transform="translate(-17.411 -13.578)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_156"
                            data-name="Path 156"
                            d="M26.185,49.15l-.947-.324s.116-4.827-1.617-5.174c-1.155-1.34.185-56.822,4.343-.185a3.377,3.377,0,0,0-1.686,1.94A17.816,17.816,0,0,0,26.185,49.15Z"
                            transform="translate(-17.411 -13.578)"
                            fill="#a6a385"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_157"
                            data-name="Path 157"
                            d="M32.725,31.386a16.781,16.781,0,0,0,6.352-16.793C37.206,6.348,32.795,3.645,32.31,2.605A11.661,11.661,0,0,1,31.27.573l.347,22.936c0,.023-.716,7.022,1.109,7.877"
                            transform="translate(-23.443 -0.48)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_158"
                            data-name="Path 158"
                            d="M32.725,31.386a16.781,16.781,0,0,0,6.352-16.793C37.206,6.348,32.795,3.645,32.31,2.605A11.661,11.661,0,0,1,31.27.573l.347,22.936c0,.023-.716,7.022,1.109,7.877"
                            transform="translate(-23.443 -0.48)"
                            fill="#499d4a"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_159"
                            data-name="Path 159"
                            d="M7.342,31.409S-.442,26.1.02,16.742c.439-9.355,5.936-13.951,7-14.783A2.151,2.151,0,0,0,7.781.2c.485,1.04.393,15.545.462,17.255C8.451,24.041,7.873,30.162,7.342,31.409Z"
                            transform="translate(0 -0.203)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_160"
                            data-name="Path 160"
                            d="M7.342,31.409S-.442,26.1.02,16.742c.439-9.355,5.936-13.951,7-14.783A2.151,2.151,0,0,0,7.781.2c.485,1.04.393,15.545.462,17.255C8.451,24.041,7.873,30.162,7.342,31.409Z"
                            transform="translate(0 -0.203)"
                            fill="#58aa50"
                            fillRule="evenodd"
                          />
                        </g>
                      </g>
                    </svg>
                  ),
                  caption: 'MongoDB',
                },
              ],
            },
          ],
        },
        {
          title: 'Building the base file structure',
          para: [
            'The base file structure for both the frontend and the backend got created with all the required files connected to run a basic app successfully.',
          ],
          imageLink: [
            {
              src: '/file structure essence@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/file%20structure%20essence%402x.pdf',
            },
          ],
          greyBG: true,
        },
        {
          title: 'Converting Design to Clean code',
          para: [
            'I converted all the designs to React code i.e HTML/JSX, CSS, and Javascript while Implementing both responsiveness and functionality to the App.',
          ],
          iFrame: {
            src: 'https://codepen.io/lewisroysonj/embed/pobdmJm?height=271&theme-id=dark&default-tab=js,result',
          },
        },
        {
          title: 'Setting up the Backend',
          para: [
            'I developed API routes to connect the backend with the frontend and implement various features such as Authentication, Search, Comments, Adding products to cart, Checkout, Dynamic rendering, and so on.',
          ],
          subSection: [
            {
              title: 'Choosing the database',
              para: [
                'I chose MongoDB as the right fit for a Database management system as it is a fast, modern, and easily scalable database.',
              ],
              img: [
                {
                  src: '/essence mongoPage.png',
                  caption: 'MongoDB console for Essence',
                  pdfLink:
                    'https://storage.googleapis.com/rl_portfolio_public/pdfs/essence%20mongoPage%402x.pdf',
                },
              ],
            },
          ],
          greyBG: true,
        },
        {
          title: 'Implementing Testing',
          para: [
            'I implemented automated unit testing using testing libraries such as Jest and React Testing Library to make the app run 100% of the time without any errors.',
          ],
          imageLink: [
            {
              src: '/test screen@2x.png',
              caption: 'Testing screen',
            },
          ],
        },
        {
          title: 'Making the code Production ready',
          para: [
            'I refactored all the source code to refine it into a cleaner version with as many fewer errors and repetition of the code as possible to come up with a final production-ready version of the app.',
          ],
          greyBG: true,
          list: [
            {
              heading: 'A list of these procedures include:',
              items: [
                'Fixing most obvious bugs',
                'A well-structured and self documenting code',
                'Going through a peer review process before final deployment',
              ],
              type: 'ul',
            },
          ],
        },
        {
          title: 'Hosting',
          para: [
            "The final version of the app got tested once again before deploying it to the servers. The successfully tested app's frontend got hosted in Firebase and the backend in Google Cloud Platform's App engine.",
          ],
          imageLink: [
            {
              src: '/gcp essence server@2x.png',
              caption: 'Google Cloud Console for Essence Backend Hosting',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/gcp%20essence%20server%402x.pdf',
            },
            {
              src: '/firebase essence@2x.png',
              caption: 'Firebase Console for Essence Frontend Hosting',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/firebase%20essence%402x.pdf',
            },
          ],
        },
      ],
    },
  },
  vamyou: {
    projectOverview:
      'Vamyou is a blogging platform with content relating to Finance and Business focused on visualizing and Motivating people to set their foot on the right track in the industry.',
    challenge:
      'Developing a complete custom blogging website with a Content Management System to help the client upload or edit Blogs without any code.',
    challengeSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="136.717"
        viewBox="0 0 192 136.717"
      >
        <g id="Group_434" data-name="Group 434" transform="translate(0)">
          <ellipse
            id="Ellipse_146"
            data-name="Ellipse 146"
            cx="16.873"
            cy="2.848"
            rx="16.873"
            ry="2.848"
            transform="translate(13.525 123.622)"
            opacity="0.1"
          />
          <ellipse
            id="Ellipse_147"
            data-name="Ellipse 147"
            cx="16.873"
            cy="2.848"
            rx="16.873"
            ry="2.848"
            transform="translate(74.984 130.597)"
            opacity="0.1"
          />
          <path
            id="Path_1114"
            data-name="Path 1114"
            d="M163.775,441.069c1.221,1.628,2.537,3.491,3.837,5.521l.186-9.365.1.065a18.279,18.279,0,0,0-4.522-2.417l.1.057Z"
            transform="translate(-149.692 -369.367)"
            fill="#fc326f"
          />
          <path
            id="Path_1115"
            data-name="Path 1115"
            d="M141.263,432.044a9.629,9.629,0,0,0-4.782-.5c-.077.014-.153.03-.229.046.377.4,2.575,2.794,5.3,6.4Z"
            transform="translate(-127.68 -366.574)"
            fill="#fc326f"
          />
          <path
            id="Path_1116"
            data-name="Path 1116"
            d="M214.781,504.618q.3.717.571,1.424l3.435-10.143.1.094q-.608-1.144-1.29-2.225l-2.768,10.891Z"
            transform="translate(-191.405 -417.159)"
            fill="#fc326f"
          />
          <path
            id="Path_1117"
            data-name="Path 1117"
            d="M190.16,463.279l1.8-10.634.1.082A28.737,28.737,0,0,0,187.1,448.1l-.189,9.544Q188.726,460.5,190.16,463.279Z"
            transform="translate(-168.789 -380.097)"
            fill="#fc326f"
          />
          <path
            id="Path_1118"
            data-name="Path 1118"
            d="M107.2,488.162l-.042-.13a23.994,23.994,0,0,0,.948,4.742l16.506,1.7c-.862-1.589-1.751-3.08-2.615-4.439Z"
            transform="translate(-104.071 -412.504)"
            fill="#fc326f"
          />
          <path
            id="Path_1119"
            data-name="Path 1119"
            d="M112.437,514l-.044-.13q.25.817.562,1.652l-.044-.13,16.706,1.485q-.3-.592-.612-1.169Z"
            transform="translate(-108.319 -433.474)"
            fill="#fc326f"
          />
          <path
            id="Path_1120"
            data-name="Path 1120"
            d="M206.779,487.7l2.745-10.8.1.089a34.316,34.316,0,0,0-2.739-3.727l-1.819,10.778Q206.012,485.9,206.779,487.7Z"
            transform="translate(-183.521 -400.518)"
            fill="#fc326f"
          />
          <path
            id="Path_1121"
            data-name="Path 1121"
            d="M147.884,555.011l-16.257-1.565a33.185,33.185,0,0,0,2.882,3.383l-.04-.144,14.86,3.057A41.272,41.272,0,0,0,147.884,555.011Z"
            transform="translate(-123.927 -465.585)"
            fill="#fc326f"
          />
          <path
            id="Path_1122"
            data-name="Path 1122"
            d="M115.557,432.49l.038-.082a6.511,6.511,0,0,0-4.681,4.229l9.945,2.247C117.914,434.987,115.59,432.525,115.557,432.49Z"
            transform="translate(-107.119 -367.366)"
            fill="#fc326f"
          />
          <path
            id="Path_1123"
            data-name="Path 1123"
            d="M218.7,517.072a41.008,41.008,0,0,1,1.3,4.268l3.871-9.709.095.095a16.255,16.255,0,0,0-1.236-3.912q-.343-.733-.717-1.444l-3.476,10.263C218.594,516.78,218.65,516.927,218.7,517.072Z"
            transform="translate(-194.454 -427.384)"
            fill="#fc326f"
          />
          <path
            id="Path_1124"
            data-name="Path 1124"
            d="M121.5,463.307c-1.286-2.006-2.588-3.847-3.795-5.456l-10.173-2.3-.034-.128a13.838,13.838,0,0,0-.675,6.022Z"
            transform="translate(-103.744 -386.043)"
            fill="#fc326f"
          />
          <path
            id="Path_1125"
            data-name="Path 1125"
            d="M118.447,528.736l16.35,1.574,0-.01a55.7,55.7,0,0,0-2.425-5.483l-16.747-1.489q.426,1.129.964,2.283A19.962,19.962,0,0,0,118.447,528.736Z"
            transform="translate(-110.945 -441.146)"
            fill="#fc326f"
          />
          <path
            id="Path_1126"
            data-name="Path 1126"
            d="M313.848,548.9l.037.116a18.279,18.279,0,0,0-1.941-4.746l.043.109L308.3,549.3c-.1,2.032-.272,4.307-.566,6.7Z"
            transform="translate(-266.832 -458.142)"
            fill="#fc326f"
          />
          <path
            id="Path_1127"
            data-name="Path 1127"
            d="M314.4,528.53a9.628,9.628,0,0,0-3.367-3.432c-.068-.039-.137-.075-.205-.111.032.552.2,3.795,0,8.3Z"
            transform="translate(-269.341 -442.492)"
            fill="#fc326f"
          />
          <path
            id="Path_1128"
            data-name="Path 1128"
            d="M293.379,638.5q-.226.743-.468,1.461l9.115-5.621.016.136q.261-1.269.426-2.537l-9.079,6.623Z"
            transform="translate(-254.805 -529.283)"
            fill="#fc326f"
          />
          <path
            id="Path_1129"
            data-name="Path 1129"
            d="M301.671,583.752l8.165-7.045.026.128a28.735,28.735,0,0,0-.863-6.728l-6.233,7.23Q302.337,580.7,301.671,583.752Z"
            transform="translate(-261.914 -479.105)"
            fill="#fc326f"
          />
          <path
            id="Path_1130"
            data-name="Path 1130"
            d="M305.139,606.584l-8.275,7.14q-.456,2.034-1.016,3.913l9-6.568.021.132A34.319,34.319,0,0,0,305.139,606.584Z"
            transform="translate(-257.188 -508.706)"
            fill="#fc326f"
          />
          <path
            id="Path_1131"
            data-name="Path 1131"
            d="M158.327,573.472q.011-.167.021-.343a28.559,28.559,0,0,0,3.746-5.743l-5-6.228q-.1-.319-.206-.636l5.32,6.629a41.258,41.258,0,0,0,1.9-4.565l-10.522-10.569.1-.255L164.2,562.318l.009-.005a55.71,55.71,0,0,0,1.63-5.77L155.4,546.213q.033-.144.065-.289l10.435,10.33q.145-.649.274-1.291l-10.4-10.594q.026-.152.051-.3l10.412,10.6c.35-1.773.616-3.489.817-5.086l-10.2-10.883.05-.127c-.242.352-.476.721-.705,1.1a21.031,21.031,0,0,0-.294-3.61l-3.908,9.8a31.549,31.549,0,0,1,.677,4.1c-.024.234-.045.469-.062.706l.128.129c.008.126.016.252.022.377l-.171-.172c-.008.138-.014.276-.02.415a29.716,29.716,0,0,0-.763-5.533l-14.752-3.035c.743.763,1.522,1.5,2.318,2.219a18.032,18.032,0,0,0-4.766-.815l.115.023,2.178,5.747c1.664,1.171,3.492,2.536,5.356,4.065l-2.681-8.84.3.264,2.674,8.817q2.61,2.162,4.832,4.359l-1.229-8.3.257.179,1.242,8.388q1.474,1.474,2.761,2.953l-.6-9.1.249.155.6,9.194-.057-.025q.507.589.983,1.177l.115-9.354.246.143-.117,9.516c.1.122.2.245.291.367a41.013,41.013,0,0,1,2.555,3.658l.056-.851q.1.378.205.744l-.032.484c.114.19.226.38.335.57q.128.435.253.846-.364-.674-.759-1.334l-14.967,1.674a76.555,76.555,0,0,0,18.258,6.225c-.148-.653-.327-1.3-.534-1.941l.16-.17c.025.077.052.153.076.23l-.083.09.1-.046q.216.676.387,1.348c.046-.364.107-.916.16-1.615,2.7-1.349,9.676-5.293,13.221-11.475l-9.262,5.057A28.838,28.838,0,0,1,158.327,573.472Zm-3.069-14.605.023-.351.235.293-.023.351Z"
            transform="translate(-126.347 -451.481)"
            fill="#fc326f"
          />
          <path
            id="Path_1132"
            data-name="Path 1132"
            d="M283.156,521.824l.082-.039a6.511,6.511,0,0,0-6.3.271l6.226,8.074C283.379,525.251,283.159,521.872,283.156,521.824Z"
            transform="translate(-241.842 -439.335)"
            fill="#fc326f"
          />
          <path
            id="Path_1133"
            data-name="Path 1133"
            d="M284.008,652.412a40.989,40.989,0,0,1-1.721,4.116l9.174-5.009.012.133a16.258,16.258,0,0,0,1.543-3.8q.2-.783.369-1.57l-9.223,5.688C284.111,652.117,284.061,652.265,284.008,652.412Z"
            transform="translate(-246.184 -540.919)"
            fill="#fc326f"
          />
          <path
            id="Path_1134"
            data-name="Path 1134"
            d="M263.927,534.871l-6.369-8.259.055-.121a13.837,13.837,0,0,0-4.361,4.207l10.117,10.795C263.659,539.128,263.83,536.88,263.927,534.871Z"
            transform="translate(-222.623 -443.713)"
            fill="#fc326f"
          />
          <path
            id="Path_1135"
            data-name="Path 1135"
            d="M112.919,579.527a9.627,9.627,0,0,0-4.7,1.007c-.069.037-.136.075-.2.114.484.268,3.313,1.862,7.014,4.446Z"
            transform="translate(-104.766 -486.749)"
            fill="#fc326f"
          />
          <path
            id="Path_1136"
            data-name="Path 1136"
            d="M112.306,633.268l-14.653,2.789-.08-.11a24,24,0,0,0,2.367,4.217l16.224-3.483C114.854,635.436,113.547,634.293,112.306,633.268Z"
            transform="translate(-96.293 -530.359)"
            fill="#fc326f"
          />
          <path
            id="Path_1137"
            data-name="Path 1137"
            d="M127.849,653.4q-.471-.47-.943-.922l-16.284,3.5-.082-.11q.491.7,1.045,1.4l-.082-.11Z"
            transform="translate(-106.815 -545.947)"
            fill="#fc326f"
          />
          <path
            id="Path_1138"
            data-name="Path 1138"
            d="M159.844,687.42a41.277,41.277,0,0,0-2.836-4.052L141.063,686.9a33.187,33.187,0,0,0,3.786,2.326l-.083-.124Z"
            transform="translate(-131.584 -571.013)"
            fill="#fc326f"
          />
          <path
            id="Path_1139"
            data-name="Path 1139"
            d="M94.019,585.831l.011-.09a6.511,6.511,0,0,0-3.145,5.468l10.152-.937C97.033,587.478,94.062,585.854,94.019,585.831Z"
            transform="translate(-90.867 -491.792)"
            fill="#fc326f"
          />
          <path
            id="Path_1140"
            data-name="Path 1140"
            d="M101.255,610.886l-10.385.958-.072-.111a13.837,13.837,0,0,0,1.219,5.935L106.55,614.9C104.706,613.391,102.9,612.043,101.255,610.886Z"
            transform="translate(-90.786 -512.197)"
            fill="#fc326f"
          />
          <path
            id="Path_1141"
            data-name="Path 1141"
            d="M136.928,662.945a55.718,55.718,0,0,0-4-4.465l-16.387,3.761q.755.942,1.622,1.873a19.964,19.964,0,0,0,2.73,2.4l16.036-3.557Z"
            transform="translate(-111.684 -550.818)"
            fill="#fc326f"
          />
          <path
            id="Path_1142"
            data-name="Path 1142"
            d="M163.775,441.069c1.221,1.628,2.537,3.491,3.837,5.521l.186-9.365.1.065a18.279,18.279,0,0,0-4.522-2.417l.1.057Z"
            transform="translate(-149.692 -369.367)"
            fill="#fc326f"
          />
          <path
            id="Path_1143"
            data-name="Path 1143"
            d="M141.263,432.044a9.629,9.629,0,0,0-4.782-.5c-.077.014-.153.03-.229.046.377.4,2.575,2.794,5.3,6.4Z"
            transform="translate(-127.68 -366.574)"
            fill="#fc326f"
          />
          <path
            id="Path_1144"
            data-name="Path 1144"
            d="M214.781,504.618q.3.717.571,1.424l3.435-10.143.1.094q-.608-1.144-1.29-2.225l-2.768,10.891Z"
            transform="translate(-191.405 -417.159)"
            fill="#fc326f"
          />
          <path
            id="Path_1145"
            data-name="Path 1145"
            d="M190.16,463.279l1.8-10.634.1.082A28.737,28.737,0,0,0,187.1,448.1l-.189,9.544Q188.726,460.5,190.16,463.279Z"
            transform="translate(-168.789 -380.097)"
            fill="#fc326f"
          />
          <path
            id="Path_1146"
            data-name="Path 1146"
            d="M107.2,488.162l-.042-.13a23.994,23.994,0,0,0,.948,4.742l16.506,1.7c-.862-1.589-1.751-3.08-2.615-4.439Z"
            transform="translate(-104.071 -412.504)"
            fill="#fc326f"
          />
          <path
            id="Path_1147"
            data-name="Path 1147"
            d="M112.437,514l-.044-.13q.25.817.562,1.652l-.044-.13,16.706,1.485q-.3-.592-.612-1.169Z"
            transform="translate(-108.319 -433.474)"
            fill="#fc326f"
          />
          <path
            id="Path_1148"
            data-name="Path 1148"
            d="M206.779,487.7l2.745-10.8.1.089a34.316,34.316,0,0,0-2.739-3.727l-1.819,10.778Q206.012,485.9,206.779,487.7Z"
            transform="translate(-183.521 -400.518)"
            fill="#fc326f"
          />
          <path
            id="Path_1149"
            data-name="Path 1149"
            d="M147.884,555.011l-16.257-1.565a33.185,33.185,0,0,0,2.882,3.383l-.04-.144,14.86,3.057A41.272,41.272,0,0,0,147.884,555.011Z"
            transform="translate(-123.927 -465.585)"
            fill="#fc326f"
          />
          <path
            id="Path_1150"
            data-name="Path 1150"
            d="M115.557,432.49l.038-.082a6.511,6.511,0,0,0-4.681,4.229l9.945,2.247C117.914,434.987,115.59,432.525,115.557,432.49Z"
            transform="translate(-107.119 -367.366)"
            fill="#fc326f"
          />
          <path
            id="Path_1151"
            data-name="Path 1151"
            d="M218.7,517.072a41.008,41.008,0,0,1,1.3,4.268l3.871-9.709.095.095a16.255,16.255,0,0,0-1.236-3.912q-.343-.733-.717-1.444l-3.476,10.263C218.594,516.78,218.65,516.927,218.7,517.072Z"
            transform="translate(-194.454 -427.384)"
            fill="#fc326f"
          />
          <path
            id="Path_1152"
            data-name="Path 1152"
            d="M121.5,463.307c-1.286-2.006-2.588-3.847-3.795-5.456l-10.173-2.3-.034-.128a13.838,13.838,0,0,0-.675,6.022Z"
            transform="translate(-103.744 -386.043)"
            fill="#fc326f"
          />
          <path
            id="Path_1153"
            data-name="Path 1153"
            d="M118.447,528.736l16.35,1.574,0-.01a55.7,55.7,0,0,0-2.425-5.483l-16.747-1.489q.426,1.129.964,2.283A19.962,19.962,0,0,0,118.447,528.736Z"
            transform="translate(-110.945 -441.146)"
            fill="#fc326f"
          />
          <path
            id="Path_1154"
            data-name="Path 1154"
            d="M313.848,548.9l.037.116a18.279,18.279,0,0,0-1.941-4.746l.043.109L308.3,549.3c-.1,2.032-.272,4.307-.566,6.7Z"
            transform="translate(-266.832 -458.142)"
            fill="#fc326f"
          />
          <path
            id="Path_1155"
            data-name="Path 1155"
            d="M314.4,528.53a9.628,9.628,0,0,0-3.367-3.432c-.068-.039-.137-.075-.205-.111.032.552.2,3.795,0,8.3Z"
            transform="translate(-269.341 -442.492)"
            fill="#fc326f"
          />
          <path
            id="Path_1156"
            data-name="Path 1156"
            d="M293.379,638.5q-.226.743-.468,1.461l9.115-5.621.016.136q.261-1.269.426-2.537l-9.079,6.623Z"
            transform="translate(-254.805 -529.283)"
            fill="#fc326f"
          />
          <path
            id="Path_1157"
            data-name="Path 1157"
            d="M301.671,583.752l8.165-7.045.026.128a28.735,28.735,0,0,0-.863-6.728l-6.233,7.23Q302.337,580.7,301.671,583.752Z"
            transform="translate(-261.914 -479.105)"
            fill="#fc326f"
          />
          <path
            id="Path_1158"
            data-name="Path 1158"
            d="M305.139,606.584l-8.275,7.14q-.456,2.034-1.016,3.913l9-6.568.021.132A34.319,34.319,0,0,0,305.139,606.584Z"
            transform="translate(-257.188 -508.706)"
            fill="#fc326f"
          />
          <path
            id="Path_1159"
            data-name="Path 1159"
            d="M158.327,573.472q.011-.167.021-.343a28.559,28.559,0,0,0,3.746-5.743l-5-6.228q-.1-.319-.206-.636l5.32,6.629a41.258,41.258,0,0,0,1.9-4.565l-10.522-10.569.1-.255L164.2,562.318l.009-.005a55.71,55.71,0,0,0,1.63-5.77L155.4,546.213q.033-.144.065-.289l10.435,10.33q.145-.649.274-1.291l-10.4-10.594q.026-.152.051-.3l10.412,10.6c.35-1.773.616-3.489.817-5.086l-10.2-10.883.05-.127c-.242.352-.476.721-.705,1.1a21.031,21.031,0,0,0-.294-3.61l-3.908,9.8a31.549,31.549,0,0,1,.677,4.1c-.024.234-.045.469-.062.706l.128.129c.008.126.016.252.022.377l-.171-.172c-.008.138-.014.276-.02.415a29.716,29.716,0,0,0-.763-5.533l-14.752-3.035c.743.763,1.522,1.5,2.318,2.219a18.032,18.032,0,0,0-4.766-.815l.115.023,2.178,5.747c1.664,1.171,3.492,2.536,5.356,4.065l-2.681-8.84.3.264,2.674,8.817q2.61,2.162,4.832,4.359l-1.229-8.3.257.179,1.242,8.388q1.474,1.474,2.761,2.953l-.6-9.1.249.155.6,9.194-.057-.025q.507.589.983,1.177l.115-9.354.246.143-.117,9.516c.1.122.2.245.291.367a41.013,41.013,0,0,1,2.555,3.658l.056-.851q.1.378.205.744l-.032.484c.114.19.226.38.335.57q.128.435.253.846-.364-.674-.759-1.334l-14.967,1.674a76.555,76.555,0,0,0,18.258,6.225c-.148-.653-.327-1.3-.534-1.941l.16-.17c.025.077.052.153.076.23l-.083.09.1-.046q.216.676.387,1.348c.046-.364.107-.916.16-1.615,2.7-1.349,9.676-5.293,13.221-11.475l-9.262,5.057A28.838,28.838,0,0,1,158.327,573.472Zm-3.069-14.605.023-.351.235.293-.023.351Z"
            transform="translate(-126.347 -451.481)"
            fill="#fc326f"
          />
          <path
            id="Path_1160"
            data-name="Path 1160"
            d="M283.156,521.824l.082-.039a6.511,6.511,0,0,0-6.3.271l6.226,8.074C283.379,525.251,283.159,521.872,283.156,521.824Z"
            transform="translate(-241.842 -439.335)"
            fill="#fc326f"
          />
          <path
            id="Path_1161"
            data-name="Path 1161"
            d="M284.008,652.412a40.989,40.989,0,0,1-1.721,4.116l9.174-5.009.012.133a16.258,16.258,0,0,0,1.543-3.8q.2-.783.369-1.57l-9.223,5.688C284.111,652.117,284.061,652.265,284.008,652.412Z"
            transform="translate(-246.184 -540.919)"
            fill="#fc326f"
          />
          <path
            id="Path_1162"
            data-name="Path 1162"
            d="M263.927,534.871l-6.369-8.259.055-.121a13.837,13.837,0,0,0-4.361,4.207l10.117,10.795C263.659,539.128,263.83,536.88,263.927,534.871Z"
            transform="translate(-222.623 -443.713)"
            fill="#fc326f"
          />
          <path
            id="Path_1163"
            data-name="Path 1163"
            d="M112.919,579.527a9.627,9.627,0,0,0-4.7,1.007c-.069.037-.136.075-.2.114.484.268,3.313,1.862,7.014,4.446Z"
            transform="translate(-104.766 -486.749)"
            fill="#fc326f"
          />
          <path
            id="Path_1164"
            data-name="Path 1164"
            d="M112.306,633.268l-14.653,2.789-.08-.11a24,24,0,0,0,2.367,4.217l16.224-3.483C114.854,635.436,113.547,634.293,112.306,633.268Z"
            transform="translate(-96.293 -530.359)"
            fill="#fc326f"
          />
          <path
            id="Path_1165"
            data-name="Path 1165"
            d="M127.849,653.4q-.471-.47-.943-.922l-16.284,3.5-.082-.11q.491.7,1.045,1.4l-.082-.11Z"
            transform="translate(-106.815 -545.947)"
            fill="#fc326f"
          />
          <path
            id="Path_1166"
            data-name="Path 1166"
            d="M159.844,687.42a41.277,41.277,0,0,0-2.836-4.052L141.063,686.9a33.187,33.187,0,0,0,3.786,2.326l-.083-.124Z"
            transform="translate(-131.584 -571.013)"
            fill="#fc326f"
          />
          <path
            id="Path_1167"
            data-name="Path 1167"
            d="M94.019,585.831l.011-.09a6.511,6.511,0,0,0-3.145,5.468l10.152-.937C97.033,587.478,94.062,585.854,94.019,585.831Z"
            transform="translate(-90.867 -491.792)"
            fill="#fc326f"
          />
          <path
            id="Path_1168"
            data-name="Path 1168"
            d="M101.255,610.886l-10.385.958-.072-.111a13.837,13.837,0,0,0,1.219,5.935L106.55,614.9C104.706,613.391,102.9,612.043,101.255,610.886Z"
            transform="translate(-90.786 -512.197)"
            fill="#fc326f"
          />
          <path
            id="Path_1169"
            data-name="Path 1169"
            d="M136.928,662.945a55.718,55.718,0,0,0-4-4.465l-16.387,3.761q.755.942,1.622,1.873a19.964,19.964,0,0,0,2.73,2.4l16.036-3.557Z"
            transform="translate(-111.684 -550.818)"
            fill="#fc326f"
          />
          <rect
            id="Rectangle_1174"
            data-name="Rectangle 1174"
            width="2.828"
            height="20.738"
            transform="translate(90.356 78.238)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1175"
            data-name="Rectangle 1175"
            width="2.828"
            height="20.738"
            transform="translate(123.725 78.238)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1176"
            data-name="Rectangle 1176"
            width="102.935"
            height="4.713"
            transform="translate(56.987 75.033)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_1177"
            data-name="Rectangle 1177"
            width="102.935"
            height="4.713"
            transform="translate(56.987 89.927)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_1178"
            data-name="Rectangle 1178"
            width="102.935"
            height="2.828"
            transform="translate(56.987 81.255)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_1179"
            data-name="Rectangle 1179"
            width="102.935"
            height="2.828"
            transform="translate(56.987 85.591)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_1180"
            data-name="Rectangle 1180"
            width="3.205"
            height="24.885"
            transform="translate(56.704 74.185)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1181"
            data-name="Rectangle 1181"
            width="3.205"
            height="24.885"
            transform="translate(156.717 74.091)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1182"
            data-name="Rectangle 1182"
            width="3.205"
            height="25.828"
            transform="translate(47.938 105.574)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1183"
            data-name="Rectangle 1183"
            width="3.205"
            height="13.762"
            transform="translate(58.495 104.632)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1184"
            data-name="Rectangle 1184"
            width="3.205"
            height="13.762"
            transform="translate(155.963 104.632)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1185"
            data-name="Rectangle 1185"
            width="3.205"
            height="25.828"
            transform="translate(165.012 105.574)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1186"
            data-name="Rectangle 1186"
            width="120.279"
            height="3.393"
            transform="translate(47.938 105.574)"
            fill="#3f3d56"
          />
          <path
            id="Path_1170"
            data-name="Path 1170"
            d="M262.948,520l-8.672,7.541H374.555L366.26,520Z"
            transform="translate(-206.338 -421.967)"
            fill="#e6e6e6"
          />
          <path
            id="Path_1171"
            data-name="Path 1171"
            d="M228.992,108.122l-.025-.136-2.321-1.229h-.364l-.139-.267H221.36l-1.109.267h-4.085l-1.107,1.291-.011.079c-.072.462-1.672,11.323,2.551,14.779l1.761.818H220.5l-.223-.444.99.444h3.2l.057-.085,1.9-.712.049-.057C226.65,122.667,230.692,117.755,228.992,108.122Z"
            transform="translate(-191.333 -102.892)"
            fill="#fc326f"
            opacity="0.1"
          />
          <rect
            id="Rectangle_1187"
            data-name="Rectangle 1187"
            width="1.885"
            height="4.902"
            transform="translate(30.028 16.025)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_1188"
            data-name="Rectangle 1188"
            width="3.393"
            height="94.263"
            transform="translate(29.179 27.242)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_1189"
            data-name="Rectangle 1189"
            width="5.09"
            height="3.205"
            transform="translate(28.331 25.639)"
            fill="#3f3d56"
          />
          <path
            id="Path_1172"
            data-name="Path 1172"
            d="M140.276,105l3.2,3.393-1.32,2.451,2.639.566,2.451-.566-1.508-2.639,3.016-3.2Z"
            transform="translate(-113.83 -85.205)"
            fill="#3f3d56"
          />
          <path
            id="Path_1173"
            data-name="Path 1173"
            d="M211.57,104.045l-1.508-1.508,1.131-1.131h14.328l1.131,1.32-1.7,1.32S215.906,103.668,211.57,104.045Z"
            transform="translate(-187.575 -98.767)"
            fill="#3f3d56"
          />
          <path
            id="Path_1174"
            data-name="Path 1174"
            d="M228.992,105.205l-.025-.136-2.321-1.229-1.06-.562-5.948-.383-3.335.784-.138.16-1.107,1.291-.011.079c-.072.462-1.672,11.323,2.551,14.779l1.761.818,1.482.688-.343-.688-.564-1.126c-.59-3.435-1.887-12.46-1.059-14.345l3.42-1.1,3.035,1.127c.209,1.355,1.563,10.859-.809,14.247l-.051.074v1.061l1.959-.733.049-.057C226.65,119.75,230.692,114.839,228.992,105.205Zm-2.9,14.328-1.052.4v-.072c2.6-3.882.9-14.305.828-14.75l-.026-.162-2.975-1.1-.552-.205-.637.205-3.19,1.029-.055.1c-1.212,2.174.867,14.335.956,14.852l.008.041.224.449-1.687-.779c-3.761-3.131-2.472-13.159-2.334-14.153l1.018-1.188,1.482-.349,1.593-.375,2.622.17,3.118.2.008,0,3.022,1.6C229.955,114.177,226.52,118.975,226.089,119.533Z"
            transform="translate(-191.333 -99.976)"
            fill="#3f3d56"
          />
          <ellipse
            id="Ellipse_148"
            data-name="Ellipse 148"
            cx="5.09"
            cy="2.639"
            rx="5.09"
            ry="2.639"
            transform="translate(25.88)"
            fill="#3f3d56"
          />
          <path
            id="Path_1175"
            data-name="Path 1175"
            d="M228.078,706.406l-3.016,9.615s4.713,2.639,11.123,0l-3.016-9.615Z"
            transform="translate(-199.747 -589.709)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_149"
            data-name="Ellipse 149"
            cx="1.508"
            cy="1.508"
            r="1.508"
            transform="translate(29.462 13.574)"
            fill="#fc326f"
          />
          <path
            id="Path_1176"
            data-name="Path 1176"
            d="M520.5,431.1a6.379,6.379,0,0,1,1.746-.876,44.531,44.531,0,0,1,12.3-2.679c3.659-.259,7.624.049,10.482,2.348a3.6,3.6,0,0,1,1.063,1.239,4.536,4.536,0,0,1,.134,2.525,2.852,2.852,0,0,1-.245.95,2.135,2.135,0,0,1-2.154.9c-.822-.088-1.594-.436-2.405-.6a10.744,10.744,0,0,0-1.519-.155l-5.087-.275a37.055,37.055,0,0,0-9.472.3,9.435,9.435,0,0,0-2.737.943c-.709.4-1.186.969-1.844.234C519.615,434.662,518.975,432.288,520.5,431.1Z"
            transform="translate(-438.759 -363.355)"
            fill="#2f2e41"
          />
          <path
            id="Path_1177"
            data-name="Path 1177"
            d="M560.094,453.349s6.843-3.067,9.438.472-1.416,2.124-1.416,2.124l-4.483,1.416-4.955-.944Z"
            transform="translate(-470.468 -383.358)"
            fill="#f2f2f2"
          />
          <path
            id="Path_1178"
            data-name="Path 1178"
            d="M568.065,437.627s.944,4.483.236,5.663,4.011,2.831,4.011,2.831l4.483-1.888s-1.18-7.315,0-8.73Z"
            transform="translate(-478.086 -369.879)"
            fill="#ffb9b9"
          />
          <path
            id="Path_1179"
            data-name="Path 1179"
            d="M568.065,437.627s.944,4.483.236,5.663,4.011,2.831,4.011,2.831l4.483-1.888s-1.18-7.315,0-8.73Z"
            transform="translate(-478.086 -369.879)"
            opacity="0.1"
          />
          <path
            id="Path_1180"
            data-name="Path 1180"
            d="M533.755,712.041a25.8,25.8,0,0,1,1.559,4.086.332.332,0,0,0,.413.275l4.2,0c.518,0,1.213-.167,1.208-.685,0-.364-.376-.591-.653-.827a5.637,5.637,0,0,1-1.286-2.7,9.143,9.143,0,0,0-3.4-4.569,1.991,1.991,0,0,0-.727-.359,2.028,2.028,0,0,0-.8.043c-.737.149-3.488.657-2.968,1.729.224.461,1.053.942,1.4,1.373A9.862,9.862,0,0,1,533.755,712.041Z"
            transform="translate(-448.198 -590.386)"
            fill="#575a89"
          />
          <path
            id="Path_1181"
            data-name="Path 1181"
            d="M608.775,696.58a9.563,9.563,0,0,1-.493.907c-.608,1-1.326,1.938-1.892,2.965a4.894,4.894,0,0,0-.689,2.064,2.292,2.292,0,0,0,.8,1.95,2.944,2.944,0,0,0,2.2.376,10.647,10.647,0,0,1,2.273-.268c-.257-1.455.97-2.736,1.277-4.181.086-.406.1-.827.215-1.226a6.013,6.013,0,0,1,.475-1.05,13.583,13.583,0,0,0,1.282-3.78,22.54,22.54,0,0,0-4.083-.109C609.04,694.465,609.2,695.667,608.775,696.58Z"
            transform="translate(-508.623 -579.793)"
            fill="#575a89"
          />
          <path
            id="Path_1182"
            data-name="Path 1182"
            d="M465.21,565.825c-1.073,1.68-.826,3.905-.072,5.751s1.954,3.476,2.775,5.293c.523,1.158.891,2.386,1.48,3.511a28.578,28.578,0,0,1,2.286,4.118,14.27,14.27,0,0,0,.89,2.864,8.769,8.769,0,0,0,1.042,1.293,11.949,11.949,0,0,1,2.4,4.29,4.276,4.276,0,0,1,3.268-2.578,12.609,12.609,0,0,1,4.333.108,18.22,18.22,0,0,1-2.091-3.9,39.2,39.2,0,0,1-.911-4.191,34.04,34.04,0,0,0-3.355-8.11l6.946-.551a27.086,27.086,0,0,1,3.413-.127c1.793.085,3.549.524,5.332.727a9.1,9.1,0,0,0,5.259-.684,25.2,25.2,0,0,0-4.521,14.883,5.762,5.762,0,0,1,8.723,2.058c2.722-3.72,2.4-8.9,4.555-12.971.444-.838.987-1.618,1.466-2.436a35.91,35.91,0,0,0,2.316-5.118c.6-1.543,1.211-3.26.632-4.813a5.025,5.025,0,0,0-1.031-1.586,6.94,6.94,0,0,0-4.828-2.429c-2.843-.065-5.191,2.042-7.685,3.409a17.683,17.683,0,0,1-9.7,2.013,45.941,45.941,0,0,1-9.96-2.351,47.406,47.406,0,0,0-4.971-1.282,9.288,9.288,0,0,0-4.111.386A6.25,6.25,0,0,0,465.21,565.825Z"
            transform="translate(-394.035 -471.898)"
            fill="#2f2e41"
          />
          <path
            id="Path_1183"
            data-name="Path 1183"
            d="M564.7,392.519a7.084,7.084,0,0,1-7.079,7.079,6.914,6.914,0,0,1-1.258-.113,7.078,7.078,0,1,1,8.336-6.965Z"
            transform="translate(-463.867 -329.253)"
            fill="#fbbcbc"
          />
          <path
            id="Path_1184"
            data-name="Path 1184"
            d="M533.18,458.15a8.318,8.318,0,0,1,1.77,1.062c.472.472,1.888,3.067,4.247,1.416s2.6-2.6,3.3-2.6,1.652,1.416,1.652,1.416l6.489,19.466a27.175,27.175,0,0,1-6.017,5.073c-3.775,2.359-8.258,3.539-10.382,2.6s-6.135-1.652-6.843-3.539-1.888-7.55-1.888-7.55l3.3-14.393Z"
            transform="translate(-443.554 -388.16)"
            fill="#f2f2f2"
          />
          <path
            id="Path_1185"
            data-name="Path 1185"
            d="M516.561,471.468a9.27,9.27,0,0,0,.633-3.593,21.779,21.779,0,0,0-.1-3.634c-.209-1.578-.723-3.1-1.048-4.658a19.685,19.685,0,0,1-.413-4.157,3.388,3.388,0,0,1,.4-1.842,5.874,5.874,0,0,0,.772-1.079c.3-.819-.437-1.678-1.24-2.015a4.879,4.879,0,0,0-3.054-.123,14.529,14.529,0,0,0-2.873,1.175,6.578,6.578,0,0,0-1.877,1.214,6.134,6.134,0,0,0-1.315,2.835,5.805,5.805,0,0,0-.235,2.5c.257,1.346,1.354,2.358,1.939,3.6a7.868,7.868,0,0,1,.363,4.683c-.27,1.568-.75,3.1-.9,4.684a6.3,6.3,0,0,0,1.071,4.53c.4.507,1.5,1.707,2.242,1.572.582-.107,1.425-1.387,1.893-1.793C514.178,474.189,515.784,473.146,516.561,471.468Z"
            transform="translate(-427.847 -381.79)"
            fill="#2f2e41"
          />
          <path
            id="Path_1186"
            data-name="Path 1186"
            d="M610.519,443.97a7.1,7.1,0,0,1-1.242,3.692,25.843,25.843,0,0,0-1.986,3.406,7.808,7.808,0,0,0-.364,4.8,15.507,15.507,0,0,0,.521,1.607l1.293,3.546a6.155,6.155,0,0,0,.75,1.574,5.083,5.083,0,0,0,1.019.98,9.509,9.509,0,0,0,3.324,1.734,5.622,5.622,0,0,0,3.7-.211,53.486,53.486,0,0,1,2.3-14.176,5.144,5.144,0,0,0,.342-2.609,4.92,4.92,0,0,0-1.742-2.361c-2.263-2.032-4.751-4.166-7.78-4.44C608.893,441.358,610.5,443.019,610.519,443.97Z"
            transform="translate(-509.443 -374.749)"
            fill="#2f2e41"
          />
          <path
            id="Path_1187"
            data-name="Path 1187"
            d="M533.4,583.7c.18.351.291.734.469,1.086a6.067,6.067,0,0,0,.963,1.295c1.578,1.749,3.506,3.492,5.859,3.6a1.607,1.607,0,0,0,.691-.087,1.369,1.369,0,0,0,.735-1.051,4.468,4.468,0,0,0-.64-2.662,12.127,12.127,0,0,0-3.5-4.841,6.565,6.565,0,0,0-5.664-.852c-.854.263-2.269.722-1.139,1.5A5.815,5.815,0,0,1,533.4,583.7Z"
            transform="translate(-447.812 -487.044)"
            fill="#fbbcbc"
          />
          <path
            id="Path_1188"
            data-name="Path 1188"
            d="M564.236,464.754a5.275,5.275,0,0,0-1.107-1.785,4.109,4.109,0,0,0-1.692-.857,9.248,9.248,0,0,0-2.481-.356,2.705,2.705,0,0,0-2.582,1.167,2.753,2.753,0,0,0,.264,2.287,2.242,2.242,0,0,0,.7.945,3.884,3.884,0,0,0,1.5.379,6.913,6.913,0,0,1,2.216,1l1.75,1.058,3.006,1.817c-.079-.048-.051-2.109-.143-2.447A23.761,23.761,0,0,0,564.236,464.754Z"
            transform="translate(-468.471 -391.182)"
            fill="#fbbcbc"
          />
          <path
            id="Path_1189"
            data-name="Path 1189"
            d="M531.677,747.874c-.7.956-.562,2.322-1.186,3.333-.54.876-1.558,1.335-2.234,2.111a5.654,5.654,0,0,0-.574.826c-.627,1.05-1.136,2.4-.519,3.451a3.7,3.7,0,0,0,2.5,1.407,9.162,9.162,0,0,0,3.691.3,3.676,3.676,0,0,0,2.856-2.132,8.226,8.226,0,0,1,.305-.862c.663-1.306,2.744-1.32,3.423-2.618.475-.908.038-2.006-.4-2.933l-1.333-2.832c-.442-.94-2.236-.4-3.171-.625C533.815,747,532.555,746.678,531.677,747.874Z"
            transform="translate(-444.67 -622.667)"
            fill="#2f2e41"
          />
          <path
            id="Path_1190"
            data-name="Path 1190"
            d="M596.574,736.5a3.792,3.792,0,0,0-1.206,1.652,18.073,18.073,0,0,0-1.106,4.835,5.855,5.855,0,0,0-.038,1.983,3.975,3.975,0,0,0,2.811,2.743,11.716,11.716,0,0,0,4.086.28,2.926,2.926,0,0,0,1.284-.261,1.992,1.992,0,0,0,.84-2.051,5.837,5.837,0,0,0-.959-2.138,5.856,5.856,0,0,1-.961-2.137c-.2-1.308.365-3.229-.439-4.412S597.649,735.751,596.574,736.5Z"
            transform="translate(-499.254 -613.731)"
            fill="#2f2e41"
          />
          <path
            id="Path_1191"
            data-name="Path 1191"
            d="M554.65,372.979a1.8,1.8,0,0,0-.779-1.017,4.121,4.121,0,0,0-.165-1.342c-.429-1.267-1.444-1.195-2.4-1.755-.416-.243-.39-.458-.606-.857a3.182,3.182,0,0,0-1.226-1.251,4.41,4.41,0,0,0-1.991-.845c-1.528-.1-2.7,1.333-4.161,1.795-.644.2-1.336.212-1.983.4a1.824,1.824,0,0,0-1.389,1.319c-.045.309.034.625-.011.933-.09.613-.628,1.042-.988,1.547a3.81,3.81,0,0,0-.068,3.9,5.5,5.5,0,0,0,.459.718,4.418,4.418,0,0,0,.485,1.641,8.178,8.178,0,0,0,2.877,2.873,6.791,6.791,0,0,1-.17-1.225.845.845,0,0,1,.052-.406c.128-.266.464-.337.721-.483a1.823,1.823,0,0,0,.756-1.583c.015-.612-.114-1.224-.05-1.832a1,1,0,0,1,.343-.737,1.184,1.184,0,0,1,.646-.154,7.294,7.294,0,0,0,3.189-.58,4.729,4.729,0,0,1,.993-.5,2.111,2.111,0,0,1,2.123,1.06c.471.7.706,1.535,1.14,2.258a2.294,2.294,0,0,0,2.025,1.284.336.336,0,0,0,.251-.112.376.376,0,0,0,.046-.214l.047-3.21A4.853,4.853,0,0,0,554.65,372.979Z"
            transform="translate(-453.995 -313.402)"
            fill="#2f2e41"
          />
          <path
            id="Path_1192"
            data-name="Path 1192"
            d="M486.564,479.686a12.84,12.84,0,0,0-1.825,3.1c-.218.673-.286,1.384-.444,2.074-.526,2.3-2.046,4.337-2.2,6.689a3.181,3.181,0,0,0,.223,1.536,3.816,3.816,0,0,0,2.475,1.763,7.883,7.883,0,0,1,2.859,1.218,8.759,8.759,0,0,1,1.083,1.256,10.494,10.494,0,0,0,5.013,3.43c-.156-1.074-.229-2.368.629-3.031a3.109,3.109,0,0,1,1.67-.474l2.765-.239a35.526,35.526,0,0,0-6.06-4.721,4.408,4.408,0,0,1-1.946-1.8,4.343,4.343,0,0,1-.22-1.659,40.887,40.887,0,0,0-.521-6.138c-.228-1.409-.529-2.806-.874-4.192-.1-.389-.669-2.134-1.373-1.725-.166.1-.321,1.2-.418,1.433A8.691,8.691,0,0,1,486.564,479.686Z"
            transform="translate(-408.31 -403.318)"
            fill="#2f2e41"
          />
          <path
            id="Path_1193"
            data-name="Path 1193"
            d="M606.947,470.2l1.129,2.348a5.642,5.642,0,0,1,.712,3.175l.067,7.043a10.253,10.253,0,0,1-.232,2.8,2.247,2.247,0,0,1-.389.837,2.618,2.618,0,0,1-.668.538c-2.137,1.335-4.907,2.094-7.165.975a9.919,9.919,0,0,1-1.469-.959,11.674,11.674,0,0,1-2.486-2.24,15.41,15.41,0,0,1-1.582-3.129,24.047,24.047,0,0,0-3.269-5.361,1.413,1.413,0,0,1-.4-.8c-.014-.617.719-.921,1.29-1.156a3.152,3.152,0,0,0,2.059-2.218c2.075,2.721,4.364,5.6,7.638,6.59a.338.338,0,0,0,.52-.289c.186-.778.251-1.578.387-2.366a13.475,13.475,0,0,1,1.422-4.1C604.894,471.169,606.15,468.54,606.947,470.2Z"
            transform="translate(-496.851 -397.594)"
            fill="#2f2e41"
          />
          <path
            id="Path_1194"
            data-name="Path 1194"
            d="M519.875,508.533a10.831,10.831,0,0,1-1.035,4.826,3.987,3.987,0,0,0-.405,1.063,2.871,2.871,0,0,0,.844,2.176,8.95,8.95,0,0,0,3.826,2.662"
            transform="translate(-437.795 -429.14)"
            opacity="0.1"
          />
          <path
            id="Path_1195"
            data-name="Path 1195"
            d="M651.533,501.081a2.307,2.307,0,0,0,.113,1.4,14.122,14.122,0,0,1,.515,4.1.149.149,0,0,1-.174.179,1.881,1.881,0,0,1-1.538-.365"
            transform="translate(-544.938 -423.093)"
            opacity="0.1"
          />
          <rect
            id="Rectangle_1190"
            data-name="Rectangle 1190"
            width="67.361"
            height="13.3"
            transform="translate(124.639 24.037)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_1191"
            data-name="Rectangle 1191"
            width="67.361"
            height="13.3"
            transform="translate(124.639 39.582)"
            fill="#e6e6e6"
          />
          <circle
            id="Ellipse_150"
            data-name="Ellipse 150"
            cx="3.973"
            cy="3.973"
            r="3.973"
            transform="translate(127.748 26.628)"
            fill="#fc326f"
          />
          <rect
            id="Rectangle_1192"
            data-name="Rectangle 1192"
            width="39.208"
            height="0.864"
            transform="translate(141.22 29.046)"
            fill="#fc326f"
          />
          <rect
            id="Rectangle_1193"
            data-name="Rectangle 1193"
            width="39.208"
            height="0.864"
            transform="translate(141.22 31.291)"
            fill="#fc326f"
          />
          <circle
            id="Ellipse_151"
            data-name="Ellipse 151"
            cx="3.973"
            cy="3.973"
            r="3.973"
            transform="translate(127.748 42.346)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_1194"
            data-name="Rectangle 1194"
            width="39.208"
            height="0.864"
            transform="translate(141.22 44.764)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_1195"
            data-name="Rectangle 1195"
            width="39.208"
            height="0.864"
            transform="translate(141.22 47.009)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_1196"
            data-name="Rectangle 1196"
            width="67.361"
            height="13.3"
            transform="translate(124.639 54.852)"
            fill="#e6e6e6"
          />
          <circle
            id="Ellipse_152"
            data-name="Ellipse 152"
            cx="3.973"
            cy="3.973"
            r="3.973"
            transform="translate(127.748 57.616)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_1197"
            data-name="Rectangle 1197"
            width="39.208"
            height="0.864"
            transform="translate(141.22 60.034)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_1198"
            data-name="Rectangle 1198"
            width="39.208"
            height="0.864"
            transform="translate(141.22 62.279)"
            fill="#ccc"
          />
          <path
            id="Path_1196"
            data-name="Path 1196"
            d="M690.642,151.608l-1.423-1.9.337-.253L690.715,151l4.563-3.734.267.326Z"
            transform="translate(-559.284 -119.506)"
            fill="#f2f2f2"
          />
        </g>
      </svg>
    ),
    solution: {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="204.296"
          height="126.068"
          viewBox="0 0 204.296 126.068"
        >
          <g id="Group_435" data-name="Group 435" transform="translate(0 0.001)">
            <rect
              id="Rectangle_1199"
              data-name="Rectangle 1199"
              width="154.652"
              height="7.849"
              transform="translate(71.248 -0.002) rotate(30.649)"
              fill="#f2f2f2"
            />
            <rect
              id="Rectangle_1200"
              data-name="Rectangle 1200"
              width="154.652"
              height="7.849"
              transform="translate(42.331 6.608) rotate(30.649)"
              fill="#f2f2f2"
            />
            <rect
              id="Rectangle_1201"
              data-name="Rectangle 1201"
              width="154.652"
              height="7.849"
              transform="translate(16.718 13.838) rotate(30.649)"
              fill="#f2f2f2"
            />
            <circle
              id="Ellipse_153"
              data-name="Ellipse 153"
              cx="41.656"
              cy="41.656"
              r="41.656"
              transform="translate(75.979 9.105)"
              fill="#3f3d56"
            />
            <path
              id="Path_1197"
              data-name="Path 1197"
              d="M646.452,370.366a7.426,7.426,0,1,1,7.425-7.426A7.426,7.426,0,0,1,646.452,370.366Zm0-14.489a7.063,7.063,0,1,0,7.063,7.063,7.064,7.064,0,0,0-7.063-7.063Z"
              transform="translate(-528.817 -311.998)"
              fill="#fc326f"
              opacity="0.3"
            />
            <path
              id="Path_1198"
              data-name="Path 1198"
              d="M620.711,351.326A14.127,14.127,0,1,1,634.837,337.2a14.127,14.127,0,0,1-14.127,14.127Zm0-27.891A13.764,13.764,0,1,0,634.475,337.2,13.764,13.764,0,0,0,620.711,323.435Z"
              transform="translate(-503.076 -286.258)"
              fill="#fc326f"
              opacity="0.3"
            />
            <path
              id="Path_1199"
              data-name="Path 1199"
              d="M598.448,334.859a19.922,19.922,0,1,1,19.922-19.922A19.922,19.922,0,0,1,598.448,334.859Zm0-39.482a19.56,19.56,0,1,0,19.56,19.56A19.56,19.56,0,0,0,598.448,295.377Z"
              transform="translate(-480.813 -263.995)"
              fill="#fc326f"
              opacity="0.3"
            />
            <path
              id="Path_1200"
              data-name="Path 1200"
              d="M569.228,313.245a27.529,27.529,0,1,1,27.529-27.529A27.56,27.56,0,0,1,569.228,313.245Zm0-54.7a27.167,27.167,0,1,0,27.167,27.167,27.2,27.2,0,0,0-27.167-27.167Z"
              transform="translate(-451.593 -234.774)"
              fill="#fc326f"
              opacity="0.3"
            />
            <path
              id="Path_1201"
              data-name="Path 1201"
              d="M544.879,295.235a33.868,33.868,0,1,1,33.868-33.868A33.906,33.906,0,0,1,544.879,295.235Zm0-67.373a33.506,33.506,0,1,0,33.506,33.506A33.544,33.544,0,0,0,544.879,227.862Z"
              transform="translate(-427.244 -210.426)"
              fill="#fc326f"
              opacity="0.3"
            />
            <circle
              id="Ellipse_154"
              data-name="Ellipse 154"
              cx="3.441"
              cy="3.441"
              r="3.441"
              transform="translate(114.194 47.32)"
              fill="#fc326f"
              opacity="0.3"
            />
            <circle
              id="Ellipse_155"
              data-name="Ellipse 155"
              cx="3.441"
              cy="3.441"
              r="3.441"
              transform="translate(123.068 57.281)"
              fill="#fc326f"
              opacity="0.3"
            />
            <circle
              id="Ellipse_156"
              data-name="Ellipse 156"
              cx="3.441"
              cy="3.441"
              r="3.441"
              transform="translate(98.981 55.832)"
              fill="#fc326f"
              opacity="0.3"
            />
            <circle
              id="Ellipse_157"
              data-name="Ellipse 157"
              cx="1.63"
              cy="1.63"
              r="1.63"
              transform="translate(116.005 49.131)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_158"
              data-name="Ellipse 158"
              cx="1.63"
              cy="1.63"
              r="1.63"
              transform="translate(100.792 57.643)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_159"
              data-name="Ellipse 159"
              cx="1.63"
              cy="1.63"
              r="1.63"
              transform="translate(124.879 59.273)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_160"
              data-name="Ellipse 160"
              cx="1.63"
              cy="1.63"
              r="1.63"
              transform="translate(192.072 30.839)"
              fill="#fc326f"
            />
            <path
              id="Path_1202"
              data-name="Path 1202"
              d="M568.557,174.536H568.2V155.882h71.9v.362H568.557Z"
              transform="translate(-450.832 -123.685)"
              fill="#2f2e41"
            />
            <path
              id="Path_1203"
              data-name="Path 1203"
              d="M1025.151,288.65a4.709,4.709,0,1,1,4.709-4.709,4.709,4.709,0,0,1-4.709,4.709Zm0-9.056a4.347,4.347,0,1,0,4.347,4.347A4.347,4.347,0,0,0,1025.151,279.595Z"
              transform="translate(-831.45 -251.473)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_161"
              data-name="Ellipse 161"
              cx="1.63"
              cy="1.63"
              r="1.63"
              transform="translate(181.205 77.746)"
              fill="#fc326f"
            />
            <path
              id="Path_1204"
              data-name="Path 1204"
              d="M972.543,515.746a4.709,4.709,0,1,1,4.709-4.709A4.709,4.709,0,0,1,972.543,515.746Zm0-9.055a4.347,4.347,0,1,0,4.347,4.347A4.347,4.347,0,0,0,972.543,506.691Z"
              transform="translate(-789.708 -431.661)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_162"
              data-name="Ellipse 162"
              cx="1.63"
              cy="1.63"
              r="1.63"
              transform="translate(50.262 38.445)"
              fill="#fc326f"
            />
            <path
              id="Path_1205"
              data-name="Path 1205"
              d="M338.6,325.476a4.709,4.709,0,1,1,4.709-4.709,4.709,4.709,0,0,1-4.709,4.709Zm0-9.056a4.347,4.347,0,1,0,4.347,4.347A4.347,4.347,0,0,0,338.6,316.421Z"
              transform="translate(-286.71 -280.692)"
              fill="#2f2e41"
            />
            <path
              id="Path_1206"
              data-name="Path 1206"
              d="M319.318,212.526h-.362v-18.3l-45.824-.722.006-.362,46.181.727Z"
              transform="translate(-216.715 -153.253)"
              fill="#2f2e41"
            />
            <path
              id="Path_1207"
              data-name="Path 1207"
              d="M663.577,313.512H611.6V294.858h.362V313.15h51.617Z"
              transform="translate(-485.27 -233.955)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1202"
              data-name="Rectangle 1202"
              width="19.922"
              height="1.268"
              transform="translate(183.741 40.981)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1203"
              data-name="Rectangle 1203"
              width="19.922"
              height="1.268"
              transform="translate(183.741 44.603)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1204"
              data-name="Rectangle 1204"
              width="19.922"
              height="1.268"
              transform="translate(183.741 48.225)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1205"
              data-name="Rectangle 1205"
              width="19.922"
              height="1.268"
              transform="translate(172.874 87.889)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1206"
              data-name="Rectangle 1206"
              width="19.922"
              height="1.268"
              transform="translate(172.874 91.511)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1207"
              data-name="Rectangle 1207"
              width="19.922"
              height="1.268"
              transform="translate(172.874 95.133)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1208"
              data-name="Rectangle 1208"
              width="19.922"
              height="1.268"
              transform="translate(41.931 48.769)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1209"
              data-name="Rectangle 1209"
              width="19.922"
              height="1.268"
              transform="translate(41.931 52.391)"
              fill="#2f2e41"
            />
            <rect
              id="Rectangle_1210"
              data-name="Rectangle 1210"
              width="19.922"
              height="1.268"
              transform="translate(41.931 56.013)"
              fill="#2f2e41"
            />
            <ellipse
              id="Ellipse_163"
              data-name="Ellipse 163"
              cx="39.663"
              cy="1.268"
              rx="39.663"
              ry="1.268"
              transform="translate(79.602 117.592)"
              fill="#f2f2f2"
            />
            <rect
              id="Rectangle_1211"
              data-name="Rectangle 1211"
              width="133.847"
              height="0.413"
              transform="translate(0 125.653)"
              fill="#2f2e41"
            />
            <path
              id="Path_1208"
              data-name="Path 1208"
              d="M179.456,322.6s1.9,5.4.729,6.226,3.938,7.61,3.938,7.61l6.125-1.66-3.354-5.673s-.438-5.673-.438-6.5S179.456,322.6,179.456,322.6Z"
              transform="translate(-164.173 -285.591)"
              fill="#ffb8b8"
            />
            <path
              id="Path_1209"
              data-name="Path 1209"
              d="M179.456,322.6s1.9,5.4.729,6.226,3.938,7.61,3.938,7.61l6.125-1.66-3.354-5.673s-.438-5.673-.438-6.5S179.456,322.6,179.456,322.6Z"
              transform="translate(-164.173 -285.591)"
              opacity="0.1"
            />
            <path
              id="Path_1210"
              data-name="Path 1210"
              d="M163.105,494.557s-.553,6.918,0,10.515,1.384,13.559,1.384,13.559,0,18.817,3.044,19.094,5.258.553,5.534-.553-1.384-1.66-.553-2.214,1.107-2.49,0-4.7,0-24.628,0-24.628l5.258,14.113s.553,11.622,1.107,13.282-.553,4.7,1.384,4.981,4.151-1.384,5.258-1.937-1.66-.553-1.107-.83,2.214-1.107,1.66-1.383-1.107-13.559-1.107-13.559-1.522-28.364-3.459-29.47a2.376,2.376,0,0,0-3.182.8Z"
              transform="translate(-151.004 -419.082)"
              fill="#2f2e41"
            />
            <path
              id="Path_1211"
              data-name="Path 1211"
              d="M183.912,713.865v2.214s-2.49,6.018,0,6.018,4.427.624,4.427-.207v-7.471Z"
              transform="translate(-166.83 -596.33)"
              fill="#2f2e41"
            />
            <path
              id="Path_1212"
              data-name="Path 1212"
              d="M250.2,713.846v2.214s2.49,6.018,0,6.018-4.427.624-4.427-.207V714.4Z"
              transform="translate(-216.79 -596.315)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_164"
              data-name="Ellipse 164"
              cx="4.981"
              cy="4.981"
              r="4.981"
              transform="translate(14.176 31.061)"
              fill="#ffb8b8"
            />
            <path
              id="Path_1213"
              data-name="Path 1213"
              d="M188.717,364.209s1.384,4.151,3.6,3.321l2.214-.83,3.874,26.565s-3.044,4.427-7.471,1.66S188.717,364.209,188.717,364.209Z"
              transform="translate(-171.082 -318.897)"
              fill="#e1cdd2"
            />
            <path
              id="Path_1214"
              data-name="Path 1214"
              d="M209.6,350.092l1.245-2.629s7.333,3.459,8.44,4.566a4.322,4.322,0,0,1,1.107,2.767l-1.937,6.918s.553,15.219.553,15.773,1.937,3.6.553,2.49-1.66-2.214-2.767-.553a20.3,20.3,0,0,1-3.6,3.6Z"
              transform="translate(-188.09 -305.61)"
              fill="#3f3d56"
            />
            <path
              id="Path_1215"
              data-name="Path 1215"
              d="M237.8,456.647l-.83,7.748s-4.981,4.427-3.874,4.7a1.531,1.531,0,0,0,1.66-.83s1.937,1.937,3.044.83,3.874-11.622,3.874-11.622Z"
              transform="translate(-206.607 -392.241)"
              fill="#ffb8b8"
            />
            <path
              id="Path_1216"
              data-name="Path 1216"
              d="M176.527,285.185a5.539,5.539,0,0,0-3.217.536,4.708,4.708,0,0,0-1.112,1.088,4.951,4.951,0,0,0-1.353,4.011l.391-.153a2.562,2.562,0,0,1-.247,1.1c.055-.16.24.1.19.261l-.431,1.414a1.331,1.331,0,0,1,1.7,1.013c.049-1.642.22-3.525,1.552-4.486a5.367,5.367,0,0,1,2.34-.764,4.707,4.707,0,0,1,2.268.012,1.632,1.632,0,0,1,1.174,1.734.773.773,0,0,1,.871.429,2.254,2.254,0,0,1,.178,1.032c.355.251.76-.247.9-.658a5.937,5.937,0,0,0,.459-2.992,2.282,2.282,0,0,0-2.023-1.968.709.709,0,0,0,.184-.5l-.842-.071a.93.93,0,0,0,.556-.293C179.731,286.3,177.074,285.2,176.527,285.185Z"
              transform="translate(-157.264 -256.183)"
              fill="#2f2e41"
            />
            <path
              id="Path_1217"
              data-name="Path 1217"
              d="M153.928,348.188s-2.253-2.207-3.063-2.072-1.918,2.072-1.918,2.072-6.641,2.214-6.364,4.427,3.321,13.006,3.321,13.006,2.49,13.006.277,14.389,10.515,4.981,10.792,3.321.83-18.263,0-20.754S153.928,348.188,153.928,348.188Z"
              transform="translate(-134.909 -304.536)"
              fill="#3f3d56"
            />
            <path
              id="Path_1218"
              data-name="Path 1218"
              d="M154.672,459.267l3.874,1.66s7.471,1.107,7.471-1.937-7.471-1.384-7.471-1.384l-2.491-.8Z"
              transform="translate(-144.508 -392.371)"
              fill="#ffb8b8"
            />
            <path
              id="Path_1219"
              data-name="Path 1219"
              d="M244.43,377.606h3.422s2.389,10.515,2.666,11.622.83,6.365.553,6.365-5.811-1.107-5.811-.277Z"
              transform="translate(-215.726 -329.527)"
              fill="#3f3d56"
            />
            <path
              id="Path_1220"
              data-name="Path 1220"
              d="M135.42,369.568l-3.321.83-2.49,14.666s-.83,3.874.553,4.151a32.006,32.006,0,0,1,5.258,2.49s.553-4.151,1.66-4.151l-2.767-2.214,1.66-9.685Z"
              transform="translate(-124.426 -323.149)"
              fill="#3f3d56"
            />
            <path
              id="Path_1221"
              data-name="Path 1221"
              d="M593.835,693.538h-5.37v-5.37h5.37Zm-4.957-.413h4.544v-4.544h-4.544Z"
              transform="translate(-488.699 -575.941)"
              fill="#3f3d56"
            />
            <circle
              id="Ellipse_165"
              data-name="Ellipse 165"
              cx="2.066"
              cy="2.066"
              r="2.066"
              transform="translate(106.376 113.467)"
              fill="#fc326f"
            />
          </g>
        </svg>
      ),
      data: [
        {
          title: 'Analysis',
          para: [
            "Thorough market research of Competitions, trends, and the brand's goal helped in developing a modern and minimal design for the website.",
          ],
        },

        {
          title: 'Project Architecture',
          greyBG: true,
          para: [
            'Based on the research and the brand needs, I structured a sitemap that can give an overview of the whole website.',
          ],
          imageLink: [
            {
              src: '/vamyou sitemap@2x.png',
              caption: 'Sitemap for Essence Natural',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/vamyou%20sitemap%402x.pdf',
            },
          ],
        },
        {
          title: 'Wireframing & Low-fidelity Prototyping',
          para: [
            'After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype.',
          ],
          imageLink: [
            {
              src: '/lo-fi prototype vamyou@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/lo-fi%20prototype%20vamyou%402x.pdf',
            },
          ],
        },
        {
          title: 'Designing Elements',
          para: [
            'Based on the wireframes and test results, I created a style guide which helped me in creating various design elements for the final design.',
          ],
          imageLink: [
            {
              src: '/style guide vamyou@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/style%20guide%20vamyou%402x.pdf',
            },
            {
              src: '/finalizing design@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/finalizing%20design%402x.pdf',
            },
          ],
        },
        {
          title: 'High-fidelity Prototyping',
          para: [
            'After the final design has been created, I implemented the final high-fidelity prototypes which further clarified the overall user flow of the project. The finalized design got tested by several groups of people which helped in finding the unknown issues in the prototype and improve the overall experience.',
          ],
          imageLink: [
            {
              src: '/high-fi-proto_vamyou@2x.png',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/high-fi-proto_vamyou%402x.pdf',
            },
          ],
        },
        {
          mainTitle: 'Development',
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="164.833"
              height="118.078"
              viewBox="0 0 164.833 118.078"
            >
              <g id="Group_446" data-name="Group 446" transform="translate(-8.813)">
                <path
                  id="Path_1224"
                  data-name="Path 1224"
                  d="M142.087,135.918c-36.369-2.768-79.74-30.947-77.532-59.963S108.768,19.928,145.137,22.7s57.3,56.993,55.1,86.008S178.455,138.685,142.087,135.918Z"
                  transform="translate(-55.661 -22.5)"
                  fill="#f2f2f2"
                />
                <ellipse
                  id="Ellipse_166"
                  data-name="Ellipse 166"
                  cx="75.918"
                  cy="4.651"
                  rx="75.918"
                  ry="4.651"
                  transform="translate(13.558 108.776)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_1212"
                  data-name="Rectangle 1212"
                  width="112.827"
                  height="88.521"
                  transform="translate(34.113 24.306)"
                  fill="#111d4a"
                />
                <path
                  id="Path_1225"
                  data-name="Path 1225"
                  d="M440.944,261.3H413.11a.338.338,0,1,1,0-.676h27.834a.338.338,0,1,1,0,.676Z"
                  transform="translate(-351.702 -224.899)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1226"
                  data-name="Path 1226"
                  d="M553.7,286.068H509.921a.338.338,0,1,1,0-.676H553.7a.338.338,0,1,1,0,.676Z"
                  transform="translate(-433.988 -245.949)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1227"
                  data-name="Path 1227"
                  d="M441.845,310.834H414.01a.338.338,0,0,1,0-.676h27.834a.338.338,0,0,1,0,.676Z"
                  transform="translate(-352.467 -266.999)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1228"
                  data-name="Path 1228"
                  d="M644.023,311.284H616.188a.338.338,0,0,1,0-.676h27.834a.338.338,0,1,1,0,.676Z"
                  transform="translate(-524.311 -267.382)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1229"
                  data-name="Path 1229"
                  d="M442.295,335.6H414.46a.338.338,0,1,1,0-.676h27.834a.338.338,0,0,1,0,.676Z"
                  transform="translate(-352.85 -288.049)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1230"
                  data-name="Path 1230"
                  d="M442.746,360.365H414.911a.338.338,0,0,1,0-.676h27.834a.338.338,0,0,1,0,.676Z"
                  transform="translate(-353.233 -309.099)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1231"
                  data-name="Path 1231"
                  d="M639.47,261.752H631.5a.338.338,0,0,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-537.324 -225.281)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1232"
                  data-name="Path 1232"
                  d="M639.47,335.6H631.5a.338.338,0,0,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-537.324 -288.049)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1233"
                  data-name="Path 1233"
                  d="M639.47,359.915H631.5a.338.338,0,1,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-537.324 -308.716)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1234"
                  data-name="Path 1234"
                  d="M728.627,359.915h-7.972a.338.338,0,1,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-613.104 -308.716)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1235"
                  data-name="Path 1235"
                  d="M420.631,286.068h-7.972a.338.338,0,1,1,0-.676h7.972a.338.338,0,1,1,0,.676Z"
                  transform="translate(-351.319 -245.949)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1236"
                  data-name="Path 1236"
                  d="M441.17,626.034H413.335a.338.338,0,1,1,0-.676H441.17a.338.338,0,1,1,0,.676Z"
                  transform="translate(-351.893 -534.908)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1237"
                  data-name="Path 1237"
                  d="M440.269,675.565H412.434a.338.338,0,1,1,0-.676h27.834a.338.338,0,1,1,0,.676Z"
                  transform="translate(-351.127 -577.007)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1238"
                  data-name="Path 1238"
                  d="M440.719,700.331H412.884a.338.338,0,0,1,0-.676h27.834a.338.338,0,0,1,0,.676Z"
                  transform="translate(-351.51 -598.058)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1239"
                  data-name="Path 1239"
                  d="M632.491,676.015h-7.972a.338.338,0,0,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-531.392 -577.39)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1240"
                  data-name="Path 1240"
                  d="M632.491,700.331h-7.972a.338.338,0,0,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-531.392 -598.058)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1241"
                  data-name="Path 1241"
                  d="M721.647,676.015h-7.972a.338.338,0,0,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-607.172 -577.39)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1242"
                  data-name="Path 1242"
                  d="M553.925,650.8H510.146a.338.338,0,0,1,0-.676h43.778a.338.338,0,0,1,0,.676Z"
                  transform="translate(-434.179 -555.957)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1243"
                  data-name="Path 1243"
                  d="M420.856,650.8h-7.972a.338.338,0,1,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-351.51 -555.957)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1244"
                  data-name="Path 1244"
                  d="M553.925,725.547H510.146a.338.338,0,0,1,0-.676h43.778a.338.338,0,0,1,0,.676Z"
                  transform="translate(-434.179 -619.49)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1245"
                  data-name="Path 1245"
                  d="M420.856,725.547h-7.972a.338.338,0,1,1,0-.676h7.972a.338.338,0,0,1,0,.676Z"
                  transform="translate(-351.51 -619.49)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1246"
                  data-name="Path 1246"
                  d="M457.823,401.13,447.014,411.8l10.809,10.674,2.432-2.432-8.175-8.175,8.242-8.242Z"
                  transform="translate(-375.269 -340.946)"
                  fill="#fc326f"
                />
                <path
                  id="Path_1247"
                  data-name="Path 1247"
                  d="M611.167,401.13,621.976,411.8l-10.809,10.674-2.432-2.432,8.175-8.175-8.242-8.242Z"
                  transform="translate(-512.668 -340.946)"
                  fill="#fc326f"
                />
                <circle
                  id="Ellipse_170"
                  data-name="Ellipse 170"
                  cx="1.35"
                  cy="1.35"
                  r="1.35"
                  transform="translate(35.763 25.206)"
                  fill="#fc326f"
                />
                <circle
                  id="Ellipse_171"
                  data-name="Ellipse 171"
                  cx="1.35"
                  cy="1.35"
                  r="1.35"
                  transform="translate(39.364 25.206)"
                  fill="#fc326f"
                />
                <circle
                  id="Ellipse_172"
                  data-name="Ellipse 172"
                  cx="1.35"
                  cy="1.35"
                  r="1.35"
                  transform="translate(42.965 25.206)"
                  fill="#fc326f"
                />
                <rect
                  id="Rectangle_1213"
                  data-name="Rectangle 1213"
                  width="112.827"
                  height="0.45"
                  transform="translate(34.113 28.807)"
                  opacity="0.1"
                />
                <path
                  id="Path_1248"
                  data-name="Path 1248"
                  d="M1019.156,506.8c0,9.568-5.688,12.909-12.7,12.909s-12.7-3.341-12.7-12.909,12.7-21.74,12.7-21.74S1019.156,497.228,1019.156,506.8Z"
                  transform="translate(-845.51 -415.656)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1249"
                  data-name="Path 1249"
                  d="M1009.506,495.741l.131-8.008,5.415-9.906-5.394,8.65.059-3.6,3.731-7.167-3.716,6.214h0l.105-6.476,4-5.706-3.981,4.688.066-11.874-.412,15.719.033-.648-4.063-6.219,4,7.464-.38,7.232-.01-.192-4.684-6.545,4.669,7.223-.047.9-.009.014,0,.074-.96,18.349h1.283l.153-9.477,4.659-7.205Z"
                  transform="translate(-849.027 -393.156)"
                  fill="#3f3d56"
                />
              </g>
            </svg>
          ),
        },
        {
          title: 'Choosing the right technology',
          para: [
            'For Vamyou Website, I used the Javascript library React.js with a server-side rendering framework Next.js for an overall better performance and SEO. For the Backend APIs, I used Express.js, a Node.js framework with MongoDB as the Database Management System. For Hosting and Deployment, I used Google App Engine for both the frontend and the backend.',
          ],
          horizontalItems: [
            {
              type: 'svg',
              items: [
                {
                  data: (
                    <svg
                      id="Group_426"
                      data-name="Group 426"
                      xmlns="http://www.w3.org/2000/svg"
                      width="69.387"
                      height="69.387"
                      viewBox="0 0 69.387 69.387"
                    >
                      <g id="Group_72" data-name="Group 72" transform="translate(0)">
                        <path
                          id="Path_178"
                          data-name="Path 178"
                          d="M34.694,0A34.694,34.694,0,1,1,0,34.694,34.694,34.694,0,0,1,34.694,0Z"
                          fill="#f1fbff"
                        />
                      </g>
                      <g id="Group_58" data-name="Group 58" transform="translate(5.758 9.357)">
                        <g id="react">
                          <path
                            id="Path_170"
                            data-name="Path 170"
                            d="M.754,26.234c0,4.291,4.19,8.3,10.8,10.554-1.319,6.641-.236,11.993,3.38,14.078,3.717,2.144,9.255.66,14.511-3.935,5.123,4.409,10.3,6.144,13.914,4.053,3.714-2.15,4.843-7.865,3.487-14.713C53.722,34,57.57,30.581,57.57,26.234c0-4.191-4.2-7.817-10.714-10.06,1.459-7.131.223-12.353-3.543-14.525C39.682-.445,34.444,1.38,29.246,5.9,23.837,1.1,18.651-.364,14.889,1.813c-3.627,2.1-4.662,7.55-3.339,14.313C5.167,18.352.754,22.06.754,26.234Z"
                            transform="translate(-0.754 -0.785)"
                            fill="rgba(255,255,255,0)"
                          />
                          <path
                            id="Path_171"
                            data-name="Path 171"
                            d="M56.73,29.065q-.806-.276-1.624-.512.136-.552.251-1.108c1.23-5.969.426-10.777-2.32-12.36-2.632-1.518-6.937.065-11.285,3.848q-.643.56-1.256,1.153-.411-.394-.836-.772c-4.557-4.046-9.124-5.751-11.866-4.163-2.63,1.522-3.409,6.043-2.3,11.7q.165.84.373,1.671c-.646.184-1.27.379-1.868.587-5.342,1.862-8.754,4.781-8.754,7.809,0,3.127,3.662,6.264,9.227,8.165q.677.23,1.364.427-.223.895-.4,1.8c-1.055,5.558-.231,9.971,2.392,11.484,2.709,1.562,7.256-.044,11.683-3.913q.525-.459,1.053-.971.665.641,1.364,1.245c4.288,3.69,8.524,5.18,11.144,3.663,2.706-1.567,3.586-6.308,2.444-12.076q-.131-.661-.3-1.349.479-.141.938-.293c5.785-1.916,9.548-5.015,9.548-8.184,0-3.039-3.522-5.977-8.971-7.853Z"
                            transform="translate(-12.007 -11.448)"
                            fill="#53c1de"
                          />
                          <path
                            id="Path_172"
                            data-name="Path 172"
                            d="M62.972,50.536c-.276.091-.559.18-.847.265a50.591,50.591,0,0,0-2.555-6.392,50.57,50.57,0,0,0,2.456-6.3c.516.15,1.017.307,1.5.473,4.669,1.607,7.517,3.984,7.517,5.815,0,1.951-3.076,4.483-8.07,6.138ZM60.9,54.642a18.252,18.252,0,0,1,.243,6.66,4.454,4.454,0,0,1-1.652,3.132c-1.59.92-4.991-.276-8.658-3.432q-.631-.543-1.269-1.157a50.654,50.654,0,0,0,4.229-5.371,50.32,50.32,0,0,0,6.834-1.053Q60.78,54.045,60.9,54.642ZM39.942,64.275a4.454,4.454,0,0,1-3.539.133c-1.592-.918-2.253-4.462-1.351-9.215q.161-.843.368-1.675a50.685,50.685,0,0,0,6.8.984,52.452,52.452,0,0,0,4.331,5.351q-.47.454-.961.885a18.256,18.256,0,0,1-5.648,3.536ZM32.663,50.524A18.261,18.261,0,0,1,26.778,47.4a4.455,4.455,0,0,1-1.883-3c0-1.837,2.739-4.181,7.308-5.774q.86-.3,1.737-.546A51.7,51.7,0,0,0,36.4,44.451a52.483,52.483,0,0,0-2.49,6.463Q33.282,50.734,32.663,50.524ZM35.1,33.916c-.948-4.846-.319-8.5,1.266-9.42,1.688-.977,5.421.416,9.355,3.909.251.223.5.457.757.7a51.653,51.653,0,0,0-4.3,5.319,52.669,52.669,0,0,0-6.733,1.046q-.193-.773-.347-1.555Zm21.765,5.374q-.74-1.278-1.534-2.523c1.61.2,3.152.473,4.6.8a45.978,45.978,0,0,1-1.615,4.345q-.7-1.327-1.451-2.626Zm-8.876-8.645a46.1,46.1,0,0,1,2.969,3.585q-2.98-.141-5.964,0c.98-1.293,1.985-2.494,2.994-3.583Zm-8.933,8.66q-.742,1.288-1.424,2.609c-.628-1.489-1.165-2.953-1.6-4.366,1.44-.322,2.975-.586,4.574-.785q-.8,1.253-1.547,2.542Zm1.593,12.881A45.9,45.9,0,0,1,36,51.439c.445-1.439.994-2.934,1.636-4.455q.684,1.322,1.431,2.611.761,1.314,1.584,2.591Zm7.4,6.116c-1.022-1.1-2.041-2.322-3.036-3.633q1.449.057,2.952.057,1.543,0,3.046-.068A45.841,45.841,0,0,1,48.052,58.3Zm10.288-11.4a45.779,45.779,0,0,1,1.694,4.439,45.739,45.739,0,0,1-4.707.8q.8-1.268,1.549-2.568Q57.639,48.26,58.341,46.907ZM55.01,48.5q-1.147,1.992-2.421,3.906c-1.5.107-3.044.162-4.621.162s-3.1-.049-4.568-.144q-1.307-1.908-2.466-3.912T38.781,44.45q1-2.074,2.146-4.068h0q1.149-1.993,2.447-3.895c1.5-.113,3.039-.173,4.595-.173s3.1.06,4.6.174q1.284,1.9,2.431,3.882t2.175,4.049Q56.167,46.5,55.01,48.5Zm4.447-24.071c1.69.975,2.347,4.9,1.285,10.057q-.1.5-.227,1a51.639,51.639,0,0,0-6.747-1.066A50.636,50.636,0,0,0,49.5,29.1q.567-.546,1.16-1.064C54.389,24.8,57.87,23.518,59.457,24.433Z"
                            transform="translate(-19.504 -18.928)"
                            fill="#f1fbff"
                          />
                          <path
                            id="Path_173"
                            data-name="Path 173"
                            d="M112.55,94.665a4.506,4.506,0,1,1-4.506,4.506,4.506,4.506,0,0,1,4.506-4.506"
                            transform="translate(-84.085 -73.701)"
                            fill="#53c1de"
                          />
                        </g>
                      </g>
                    </svg>
                  ),
                  caption: 'React JS',
                },
                {
                  data: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="69"
                      height="70"
                      viewBox="0 0 69 70"
                    >
                      <g id="Group_427" data-name="Group 427" transform="translate(-0.488)">
                        <rect
                          id="Rectangle_211"
                          data-name="Rectangle 211"
                          width="69"
                          height="70"
                          rx="34.5"
                          transform="translate(0.488)"
                          fill="#f9fff3"
                        />
                        <g id="nodejs-icon" transform="translate(19.409 18.216)">
                          <path
                            id="Path_166"
                            data-name="Path 166"
                            d="M14.417.942a2.806,2.806,0,0,1,2.74,0q6.256,3.535,12.513,7.068a2.576,2.576,0,0,1,1.3,2.218V24.407a2.6,2.6,0,0,1-1.4,2.267Q23.337,30.189,17.1,33.708a2.727,2.727,0,0,1-2.77-.077q-1.869-1.084-3.741-2.163a2.2,2.2,0,0,1-.722-.52c.159-.214.443-.241.674-.335a8.732,8.732,0,0,0,1.476-.689.344.344,0,0,1,.384.023c1.066.611,2.122,1.24,3.191,1.845.228.132.459-.043.654-.152q6.119-3.458,12.243-6.909a.4.4,0,0,0,.222-.4q0-7.016,0-14.033a.439.439,0,0,0-.261-.437q-6.214-3.5-12.425-7a.432.432,0,0,0-.488,0Q9.33,6.361,3.119,9.865a.433.433,0,0,0-.263.435q0,7.016,0,14.034a.4.4,0,0,0,.225.394Q4.74,25.668,6.4,26.6a2.564,2.564,0,0,0,2.075.278A1.574,1.574,0,0,0,9.493,25.4c.006-4.65,0-9.3,0-13.95a.35.35,0,0,1,.381-.358c.531,0,1.063-.007,1.594,0a.368.368,0,0,1,.347.425c0,4.68.006,9.359,0,14.039a3.56,3.56,0,0,1-1.665,3.214,5.126,5.126,0,0,1-4.582-.126C4.354,28.04,3.195,27.324,2,26.674A2.6,2.6,0,0,1,.6,24.407V10.228A2.581,2.581,0,0,1,1.949,7.981Q8.183,4.463,14.417.942Z"
                            transform="translate(-0.603 -0.584)"
                            fill="#8cc84b"
                          />
                          <path
                            id="Path_167"
                            data-name="Path 167"
                            d="M109.8,85.648a9.837,9.837,0,0,1,5.385.824A4.072,4.072,0,0,1,117.173,90a.381.381,0,0,1-.414.281c-.526,0-1.052.007-1.578,0a.407.407,0,0,1-.381-.394,2.4,2.4,0,0,0-1.149-1.66,6.812,6.812,0,0,0-3.153-.451,4.28,4.28,0,0,0-2.257.562,1.43,1.43,0,0,0-.476,1.6c.169.4.633.531,1.012.65,2.185.571,4.5.515,6.643,1.266a3.127,3.127,0,0,1,2.059,1.831,3.912,3.912,0,0,1-.663,3.733,5.23,5.23,0,0,1-2.808,1.513,13.49,13.49,0,0,1-4.238.18,6.679,6.679,0,0,1-3.728-1.4,3.913,3.913,0,0,1-1.26-3.086.353.353,0,0,1,.387-.312c.53,0,1.059-.006,1.589,0a.371.371,0,0,1,.379.367,2.408,2.408,0,0,0,.9,1.69,6.794,6.794,0,0,0,3.66.666,4.97,4.97,0,0,0,3-.734,1.658,1.658,0,0,0,.451-1.583c-.129-.468-.618-.686-1.038-.828-2.157-.682-4.5-.435-6.633-1.206a3.228,3.228,0,0,1-2.039-1.777,3.639,3.639,0,0,1,.727-3.786,5.866,5.866,0,0,1,3.641-1.463Z"
                            transform="translate(-92.363 -75.469)"
                            fill="#8cc84b"
                          />
                        </g>
                      </g>
                    </svg>
                  ),
                  caption: 'Node JS',
                },
                {
                  data: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                    >
                      <g id="Group_447" data-name="Group 447" transform="translate(-0.14)">
                        <rect
                          id="Rectangle_213"
                          data-name="Rectangle 213"
                          width="70"
                          height="70"
                          rx="35"
                          transform="translate(0.14)"
                          fill="rgba(88,170,80,0.08)"
                        />
                        <g id="mongodb" transform="translate(26.784 16.943)">
                          <path
                            id="Path_155"
                            data-name="Path 155"
                            d="M26.185,49.15l-.947-.324s.116-4.827-1.617-5.174c-1.155-1.34.185-56.822,4.343-.185a3.377,3.377,0,0,0-1.686,1.94A17.816,17.816,0,0,0,26.185,49.15Z"
                            transform="translate(-17.411 -13.578)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_156"
                            data-name="Path 156"
                            d="M26.185,49.15l-.947-.324s.116-4.827-1.617-5.174c-1.155-1.34.185-56.822,4.343-.185a3.377,3.377,0,0,0-1.686,1.94A17.816,17.816,0,0,0,26.185,49.15Z"
                            transform="translate(-17.411 -13.578)"
                            fill="#a6a385"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_157"
                            data-name="Path 157"
                            d="M32.725,31.386a16.781,16.781,0,0,0,6.352-16.793C37.206,6.348,32.795,3.645,32.31,2.605A11.661,11.661,0,0,1,31.27.573l.347,22.936c0,.023-.716,7.022,1.109,7.877"
                            transform="translate(-23.443 -0.48)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_158"
                            data-name="Path 158"
                            d="M32.725,31.386a16.781,16.781,0,0,0,6.352-16.793C37.206,6.348,32.795,3.645,32.31,2.605A11.661,11.661,0,0,1,31.27.573l.347,22.936c0,.023-.716,7.022,1.109,7.877"
                            transform="translate(-23.443 -0.48)"
                            fill="#499d4a"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_159"
                            data-name="Path 159"
                            d="M7.342,31.409S-.442,26.1.02,16.742c.439-9.355,5.936-13.951,7-14.783A2.151,2.151,0,0,0,7.781.2c.485,1.04.393,15.545.462,17.255C8.451,24.041,7.873,30.162,7.342,31.409Z"
                            transform="translate(0 -0.203)"
                            fill="#fff"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_160"
                            data-name="Path 160"
                            d="M7.342,31.409S-.442,26.1.02,16.742c.439-9.355,5.936-13.951,7-14.783A2.151,2.151,0,0,0,7.781.2c.485,1.04.393,15.545.462,17.255C8.451,24.041,7.873,30.162,7.342,31.409Z"
                            transform="translate(0 -0.203)"
                            fill="#58aa50"
                            fillRule="evenodd"
                          />
                        </g>
                      </g>
                    </svg>
                  ),
                  caption: 'MongoDB',
                },
              ],
            },
          ],
        },
        {
          title: 'Building the base file structure',
          para: [
            'I created the base file structure for both the frontend and the backend with all the required files connected to run a basic app successfully.',
          ],
          imageLink: [
            {
              src: '/file structure essence@2x.png',
            },
          ],
          greyBG: true,
        },
        {
          title: 'Converting Design to Clean code',
          para: [
            'I converted all the designs to React code i.e HTML/JSX, CSS, and Javascript while Implementing both responsiveness and functionality to the App.',
          ],
          // <iframe style={{ height: "80vw", width: "100%" }} scrolling='no' title='Test' src= frameborder='no' loading='lazy' allowtransparency='true' allowfullscreen='true'>

          // </iframe>
          iFrame: {
            src: 'https://codepen.io/lewisroysonj/embed/pobdmJm?height=271&theme-id=dark&default-tab=js,result',
          },
        },
        {
          title: 'Setting up the Backend',
          para: [
            'I developed API routes to connect the backend with the frontend and implement various features such as Dynamic Blog and Profile Rendering, Authentication, Search, Comments, and so on.',
          ],
          subSection: [
            {
              title: 'Choosing the database',
              para: [
                'I chose MongoDB as the right fit for a Database management system as it is a fast, modern, and easily scalable database.',
              ],
              img: [
                {
                  src: '/vamyou mongo page@2x.png',
                  caption: 'MongoDB console for Vamyou',
                  pdfLink:
                    'https://storage.googleapis.com/rl_portfolio_public/pdfs/vamyou%20mongo%20page%402x.pdf',
                },
              ],
            },
          ],
          greyBG: true,
        },
        {
          title: 'Implementing Testing',
          para: [
            'I implemented automated unit testing using testing libraries such as Jest and React Testing Library to make the app run 100% of the time without any errors.',
          ],
          imageLink: [
            {
              src: '/test screen@2x.png',
              caption: 'Testing screen',
            },
          ],
        },
        {
          title: 'Making the code Production ready',
          para: [
            'I refactored all the source code to refine it into a cleaner version with as many fewer errors and repetition of the code as possible to come up with a final production-ready version of the app.',
          ],
          greyBG: true,
          list: [
            {
              heading: 'A list of these procedures include:',
              items: [
                'Fixing most obvious bugs',
                'A well-structured and self documenting code',
                'Going through a peer review process before final deployment',
              ],
              type: 'ul',
            },
          ],
        },
        {
          title: 'Hosting',
          para: [
            "The final version of the website got tested once again before deploying it to the servers for any errors. The successfully tested app's frontend and the backend got hosted in Google Cloud Platform's App engine.",
          ],
          imageLink: [
            {
              src: '/vamyou client gcp page@2x.png',
              caption: 'Google Cloud Console for Vamyou Frontend Hosting',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/vamyou%20client%20gcp%20page%402x.pdf',
            },
            {
              src: '/vamyou server gcp page@2x.png',
              caption: 'Google Cloud Console for Vamyou Backend Hosting',
              pdfLink:
                'https://storage.googleapis.com/rl_portfolio_public/pdfs/vamyou%20server%20gcp%20page%402x.pdf',
            },
          ],
        },
      ],
    },
  },
}

export default workCaseData
