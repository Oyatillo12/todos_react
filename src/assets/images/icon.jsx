function HeartIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638Z" fill="#EF1C5C" />
        </svg>

    )
}
function BlackHeartIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_10081_260" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_10081_260)">
                <path d="M12.05 21.914H12.036C9.453 21.866 2 15.132 2 8.754C2 5.69 4.525 3 7.403 3C9.693 3 11.233 4.58 12.049 5.73C12.863 4.582 14.403 3 16.694 3C19.574 3 22.098 5.69 22.098 8.755C22.098 15.131 14.644 21.865 12.061 21.912H12.05V21.914ZM7.404 4.501C5.324 4.501 3.501 6.489 3.501 8.756C3.501 14.496 10.535 20.352 12.051 20.414C13.569 20.352 20.601 14.497 20.601 8.756C20.601 6.489 18.778 4.501 16.698 4.501C14.17 4.501 12.758 7.437 12.746 7.466C12.516 8.028 11.59 8.028 11.359 7.466C11.345 7.436 9.93401 4.501 7.40501 4.501H7.404Z" fill="#536471" />
            </g>
        </svg>

    )
}

function SavedIcon() {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="currentColor"></path> </g></svg>
    )
}

export { HeartIcon, BlackHeartIcon,SavedIcon }