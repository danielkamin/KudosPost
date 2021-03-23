/**
 * @property {object} theme -   Object containing properties such as colors, size, spacing etc
 * @property {object} theme.colors  -   Object containing colors used in the app
 * @property {object} theme.colors.text -   Object containing text colors properties: primary, secondary, secondaryLight (subtitle)
 * @property {object} theme.colors.background   - Object containing background colors properties: primary, secondary
 * @property {object} theme.colors.details  -   Object containing main colors properties: primary,secondary
 * @property {object} theme.size  -    Object containing sizes used in the app
 */
const theme = {
    colors:{
        text:{
            primary:`#333333`,
            secondary:`#707070`,
            secondarylight:`#616161`
        },
        background:{
            primary:`#FBFBFB`,
            secondary:`#FFF`
        },
        details:{
            primary:`#A8996F`,
            secondary:`#78107E`,
            secondaryLight:`#96459A`
        },
        border:{
            primary:`#EEEEEE`,
            secondary:`#E5E1E1`
        }
    },
    fontSize:{
        sm:`12px`,
        md:`16px`,
        lg:`24px`
    },
    borderRadius:`6px`
}

export default theme;