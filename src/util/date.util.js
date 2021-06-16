import { formatDistance } from 'date-fns'
export const DateUtil = {
    formatForDisplay(timestamp) {
        return formatDistance(
            new Date(timestamp),
            Date.now(),
            { addSuffix: true }
        )
    }
}