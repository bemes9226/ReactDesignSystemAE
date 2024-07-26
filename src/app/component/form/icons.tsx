import React from "react"
import { ButtonType } from "./interfaces"

export function getPreIconByType(type: ButtonType): React.JSX.Element {
    switch (type) {
        case ButtonType.SEARCH:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
                <line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
        default: return <></>
    }
}

export function getPostIconByType(type: ButtonType): React.JSX.Element {
    switch (type) {
        case ButtonType.NUMBER:
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
            </svg>
        case ButtonType.MONTH:
            return <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
                <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
                <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
            </svg>
        case ButtonType.DATE_AND_TIME:
            return <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
                <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
                <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
            </svg>
        case ButtonType.DATE:
            return <svg className="text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
                <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
                <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="16" />
            </svg>
        default: return <></>
    }
}