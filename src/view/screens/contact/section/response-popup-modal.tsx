const ResponsePopupModal = (props: {
  error: boolean
  message: string
  togglePopup: () => void
}) => (
  <div className="popupModal">
    {!props.error ? (
      <div className="successMessage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127.238"
          height="125.931"
          viewBox="0 0 127.238 125.931"
        >
          <g
            id="Icon_feather-check-circle"
            data-name="Icon feather-check-circle"
            transform="translate(0.512 0.577)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M121.776,56.952v5.464A59.388,59.388,0,1,1,86.559,8.135"
              transform="translate(0 0)"
              fill="none"
              stroke="#fbfbfb"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="7"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M90.7,6,31.316,65.447,13.5,47.631"
              transform="translate(31.072 8.905)"
              fill="none"
              stroke="#fbfbfb"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="7"
            />
          </g>
        </svg>
        <h4>{props.message}</h4>
        <button type="button" onClick={props.togglePopup}>
          Done
        </button>
      </div>
    ) : (
      <div className="failureMessage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="125.788"
          height="125.931"
          viewBox="0 0 125.788 125.931"
        >
          <g id="Group_1" data-name="Group 1" transform="translate(5305.512 3685.102)">
            <g
              id="Icon_feather-check-circle"
              data-name="Icon feather-check-circle"
              transform="translate(-5305 -3684.524)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M121.776,56.952v5.464A59.388,59.388,0,1,1,86.559,8.135"
                transform="translate(0 0)"
                fill="none"
                stroke="#fbfbfb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M59.221,10.173l-27.9,27.719"
                transform="translate(13.451 88.74) rotate(-45)"
                fill="none"
                stroke="#fbfbfb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
            </g>
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="5.5"
              cy="5.5"
              r="5.5"
              transform="translate(-5248 -3654)"
              fill="#fff"
            />
          </g>
        </svg>
        <h4>{props.message}</h4>
        <button type="submit" onClick={props.togglePopup}>
          Retry
        </button>
      </div>
    )}
    <section onKeyDown={props.togglePopup} role="button" tabIndex={0} onClick={props.togglePopup} />
  </div>
)

export default ResponsePopupModal
