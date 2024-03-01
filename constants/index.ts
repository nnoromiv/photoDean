import { faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { BRD_I, BRD_II, BRD_III, BRD_IV, BRD_IX, BRD_V, BRD_VI, BRD_VII, BRD_VIII, BRD_X, BRD_XI, BRD_XII, BRD_XIII, BRD_XIV, BRD_XIX, BRD_XV, BRD_XVI, BRD_XVII, BRD_XVIII, BRD_XX, BRD_XXI, BRD_XXII, BRD_XXIII, BRD_XXIV, BTS_I, BTS_II, BTS_III, BTS_IV, BTS_IX, BTS_V, BTS_VI, BTS_VII, BTS_VIII, BTS_X, BTS_XI, BTS_XII, BTS_XIII, BTS_XIV, BTS_XV, BTS_XVI, CNT_C, CNT_CI, CNT_CII, CNT_CIII, CNT_CIV, CNT_CIX, CNT_CV, CNT_CVI, CNT_CVII, CNT_CVIII, CNT_CX, CNT_I, CNT_II, CNT_III, CNT_IV, CNT_IX, CNT_L, CNT_LI, CNT_LII, CNT_LIII, CNT_LIV, CNT_LIX, CNT_LV, CNT_LVI, CNT_LVII, CNT_LVIII, CNT_LX, CNT_LXI, CNT_LXII, CNT_LXIII, CNT_LXIV, CNT_LXIX, CNT_LXV, CNT_LXVI, CNT_LXVII, CNT_LXVIII, CNT_LXX, CNT_LXXI, CNT_LXXII, CNT_LXXIII, CNT_LXXIV, CNT_LXXIX, CNT_LXXV, CNT_LXXVI, CNT_LXXVII, CNT_LXXVIII, CNT_LXXX, CNT_LXXXI, CNT_LXXXII, CNT_LXXXIII, CNT_LXXXIV, CNT_LXXXIX, CNT_LXXXV, CNT_LXXXVI, CNT_LXXXVII, CNT_LXXXVIII, CNT_V, CNT_VI, CNT_VII, CNT_VIII, CNT_X, CNT_XC, CNT_XCI, CNT_XCII, CNT_XCIII, CNT_XCIV, CNT_XCIX, CNT_XCV, CNT_XCVI, CNT_XCVII, CNT_XCVIII, CNT_XI, CNT_XII, CNT_XIII, CNT_XIV, CNT_XIX, CNT_XL, CNT_XLI, CNT_XLII, CNT_XLIII, CNT_XLIV, CNT_XLIX, CNT_XLV, CNT_XLVI, CNT_XLVII, CNT_XLVIII, CNT_XV, CNT_XVI, CNT_XVII, CNT_XVIII, CNT_XX, CNT_XXI, CNT_XXII, CNT_XXIII, CNT_XXIV, CNT_XXIX, CNT_XXV, CNT_XXVI, CNT_XXVII, CNT_XXVIII, CNT_XXX, CNT_XXXI, CNT_XXXII, CNT_XXXIII, CNT_XXXIV, CNT_XXXIX, CNT_XXXV, CNT_XXXVI, CNT_XXXVII, CNT_XXXVIII, SEC_I, SEC_II, SEC_III, SEC_IV, SEC_V, LST_C, LST_CI, LST_CII, LST_CIII, LST_CIV, LST_CIX, LST_CL, LST_CLI, LST_CLII, LST_CLIII, LST_CLIV, LST_CLIX, LST_CLV, LST_CLVI, LST_CLVII, LST_CLVIII, LST_CLX, LST_CLXI, LST_CLXII, LST_CLXIII, LST_CLXIV, LST_CLXIX, LST_CLXV, LST_CLXVI, LST_CLXVII, LST_CLXVIII, LST_CLXX, LST_CLXXI, LST_CLXXII, LST_CLXXIII, LST_CLXXIV, LST_CLXXV, LST_CLXXVI, LST_CV, LST_CVI, LST_CVII, LST_CVIII, LST_CX, LST_CXI, LST_CXII, LST_CXIII, LST_CXIV, LST_CXIX, LST_CXV, LST_CXVI, LST_CXVII, LST_CXVIII, LST_CXX, LST_CXXI, LST_CXXII, LST_CXXIII, LST_CXXIV, LST_CXXIX, LST_CXXL, LST_CXXLI, LST_CXXLII, LST_CXXLIII, LST_CXXLIV, LST_CXXLIX, LST_CXXLV, LST_CXXLVI, LST_CXXLVII, LST_CXXLVIII, LST_CXXV, LST_CXXVI, LST_CXXVII, LST_CXXVIII, LST_CXXX, LST_CXXXI, LST_CXXXII, LST_CXXXIII, LST_CXXXIV, LST_CXXXIX, LST_CXXXV, LST_CXXXVI, LST_CXXXVII, LST_CXXXVIII, LST_I, LST_II, LST_III, LST_IV, LST_IX, LST_L, LST_LI, LST_LII, LST_LIII, LST_LIV, LST_LIX, LST_LV, LST_LVI, LST_LVII, LST_LVIII, LST_LX, LST_LXI, LST_LXII, LST_LXIII, LST_LXIV, LST_LXIX, LST_LXV, LST_LXVI, LST_LXVII, LST_LXVIII, LST_LXX, LST_LXXI, LST_LXXII, LST_LXXIII, LST_LXXIV, LST_LXXIX, LST_LXXV, LST_LXXVI, LST_LXXVII, LST_LXXVIII, LST_LXXX, LST_LXXXI, LST_LXXXII, LST_LXXXIII, LST_LXXXIV, LST_LXXXIX, LST_LXXXV, LST_LXXXVI, LST_LXXXVII, LST_LXXXVIII, LST_V, LST_VI, LST_VII, LST_VIII, LST_X, LST_XC, LST_XCI, LST_XCII, LST_XCIII, LST_XCIV, LST_XCIX, LST_XCV, LST_XCVI, LST_XCVII, LST_XCVIII, LST_XI, LST_XII, LST_XIII, LST_XIV, LST_XIX, LST_XL, LST_XLI, LST_XLII, LST_XLIII, LST_XLIV, LST_XLIX, LST_XLV, LST_XLVI, LST_XLVII, LST_XLVIII, LST_XV, LST_XVI, LST_XVII, LST_XVIII, LST_XX, LST_XXI, LST_XXII, LST_XXIII, LST_XXIV, LST_XXIX, LST_XXV, LST_XXVI, LST_XXVII, LST_XXVIII, LST_XXX, LST_XXXI, LST_XXXII, LST_XXXIII, LST_XXXIV, LST_XXXIX, LST_XXXV, LST_XXXVI, LST_XXXVII, LST_XXXVIII, OUT_I, OUT_II, OUT_III, OUT_IV, OUT_IX, OUT_L, OUT_LI, OUT_LII, OUT_LIII, OUT_LIV, OUT_LIX, OUT_LV, OUT_LVI, OUT_LVII, OUT_LVIII, OUT_LX, OUT_LXI, OUT_LXII, OUT_LXIII, OUT_V, OUT_VI, OUT_VII, OUT_VIII, OUT_X, OUT_XI, OUT_XII, OUT_XIII, OUT_XIV, OUT_XIX, OUT_XL, OUT_XLI, OUT_XLII, OUT_XLIII, OUT_XLIV, OUT_XLIX, OUT_XLV, OUT_XLVI, OUT_XLVII, OUT_XLVIII, OUT_XV, OUT_XVI, OUT_XVII, OUT_XVIII, OUT_XX, OUT_XXI, OUT_XXII, OUT_XXIII, OUT_XXIV, OUT_XXIX, OUT_XXV, OUT_XXVI, OUT_XXVII, OUT_XXVIII, OUT_XXX, OUT_XXXI, OUT_XXXII, OUT_XXXIII, OUT_XXXIV, OUT_XXXIX, OUT_XXXV, OUT_XXXVI, OUT_XXXVII, OUT_XXXVIII, STD_I, STD_II, STD_III, STD_IV, STD_IX, STD_L, STD_LI, STD_LII, STD_LIII, STD_LIV, STD_LIX, STD_LV, STD_LVI, STD_LVII, STD_LVIII, STD_LX, STD_LXI, STD_LXII, STD_LXIII, STD_LXIV, STD_LXIX, STD_LXV, STD_LXVI, STD_LXVII, STD_LXVIII, STD_LXX, STD_LXXI, STD_LXXII, STD_LXXIII, STD_LXXIV, STD_LXXIX, STD_LXXV, STD_LXXVI, STD_LXXVII, STD_LXXVIII, STD_LXXX, STD_LXXXI, STD_LXXXII, STD_LXXXIII, STD_LXXXIV, STD_LXXXV, STD_LXXXVI, STD_V, STD_VI, STD_VII, STD_VIII, STD_X, STD_XI, STD_XII, STD_XIII, STD_XIV, STD_XIX, STD_XL, STD_XLI, STD_XLII, STD_XLIII, STD_XLIV, STD_XLIX, STD_XLV, STD_XLVI, STD_XLVII, STD_XLVIII, STD_XV, STD_XVI, STD_XVII, STD_XVIII, STD_XX, STD_XXI, STD_XXII, STD_XXIII, STD_XXIV, STD_XXIX, STD_XXV, STD_XXVI, STD_XXVII, STD_XXVIII, STD_XXX, STD_XXXI, STD_XXXII, STD_XXXIII, STD_XXXIV, STD_XXXIX, STD_XXXV, STD_XXXVI, STD_XXXVII, STD_XXXVIII } from "../assets"

export const logo = 'https://static.pixieset.com/favicon.ico'
export const hero = 'https://images-pw.pixieset.com/elementfield/254514404/IMG_8919-ba19a31a-1500.JPG'
export const about = 'https://images-pw.pixieset.com/elementfield/133224404/Image_2-10-24_at_2.31_PM-4f22a131-2500.JPG'

export const NAV = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Message',
        link: '#message'
    },
    {
        name: 'Portfolio',
        link: '#portfolio'
    },
    {
        name: 'Contact',
        link: 'https://api.whatsapp.com/message/A23FM6ZAOIQTF1?autoload=1&app_absent=0'
    }
]

export const PRICING_NAV = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Events',
        link: '#events'
    },
    {
        name: 'Outfit',
        link: '#outfit'
    },
    {
        name: 'Home Service',
        link: '#home-service'
    }
]

export const BehindTheScene = [
    {
        image: BTS_I
    },
    {
        image: BTS_II
    },
    {
        image: BTS_III
    },
    {
        image: BTS_IV
    },
    {
        image: BTS_V
    },
    {
        image: BTS_VI
    },
    {
        image: BTS_VII
    },
    {
        image: BTS_VIII
    },
    {
        image: BTS_IX
    },
    {
        image: BTS_X
    },
    {
        image: BTS_XI
    },
    {
        image: BTS_XII
    },
    {
        image: BTS_XIII
    },
    {
        image: BTS_XIV
    },
    {
        image: BTS_XV
    },
    {
        image: BTS_XVI
    },
]

export const Brand = [
    {
        image: BRD_I
    },
    {
        image: BRD_II
    },
    {
        image: BRD_III
    },
    {
        image: BRD_IV
    },
    {
        image: BRD_V
    },
    {
        image: BRD_VI
    },
    {
        image: BRD_VII
    },
    {
        image: BRD_VIII
    },
    {
        image: BRD_IX
    },
    {
        image: BRD_X
    },
    {
        image: BRD_XI
    },
    {
        image: BRD_XII
    },
    {
        image: BRD_XIII
    },
    {
        image: BRD_XIV
    },
    {
        image: BRD_XV
    },
    {
        image: BRD_XVI
    },
    {
        image: BRD_XVII
    },
    {
        image: BRD_XVIII
    },
    {
        image: BRD_XIX
    },
    {
        image: BRD_XX
    },
    {
        image: BRD_XXI
    },
    {
        image: BRD_XXII
    },
    {
        image: BRD_XXIII
    },
    {
        image: BRD_XXIV
    },
]

export const Concert = [
    {
        image: CNT_I
    },
    {
        image: CNT_II
    },
    {
        image: CNT_III
    },
    {
        image: CNT_IV
    },
    {
        image: CNT_V
    },
    {
        image: CNT_VI
    },
    {
        image: CNT_VII
    },
    {
        image: CNT_VIII
    },
    {
        image: CNT_IX
    },
    {
        image: CNT_X
    },
    {
        image: CNT_XI
    },
    {
        image: CNT_XII
    },
    {
        image: CNT_XIII
    },
    {
        image: CNT_XIV
    },
    {
        image: CNT_XV
    },
    {
        image: CNT_XVI
    },
    {
        image: CNT_XVII
    },
    {
        image: CNT_XVIII
    },
    {
        image: CNT_XIX
    },
    {
        image: CNT_XX
    },
    {
        image: CNT_XXI
    },
    {
        image: CNT_XXII
    },
    {
        image: CNT_XXIII
    },
    {
        image: CNT_XXIV
    },
    {
        image: CNT_XXV
    },
    {
        image: CNT_XXVI
    },
    {
        image: CNT_XXVII
    },
    {
        image: CNT_XXVIII
    },
    {
        image: CNT_XXIX
    },
    {
        image: CNT_XXX
    },
    {
        image: CNT_XXXI
    },
    {
        image: CNT_XXXII
    },
    {
        image: CNT_XXXIII
    },
    {
        image: CNT_XXXIV
    },
    {
        image: CNT_XXXV
    },
    {
        image: CNT_XXXVI
    },
    {
        image: CNT_XXXVII
    },
    {
        image: CNT_XXXVIII
    },
    {
        image: CNT_XXXIX
    },
    {
        image: CNT_XL
    },
    {
        image: CNT_XLI
    },
    {
        image: CNT_XLII
    },
    {
        image: CNT_XLIII
    },
    {
        image: CNT_XLIV
    },
    {
        image: CNT_XLV
    },
    {
        image: CNT_XLVI
    },
    {
        image: CNT_XLVII
    },
    {
        image: CNT_XLVIII
    },
    {
        image: CNT_XLIX
    },
    {
        image: CNT_L
    },
    {
        image: CNT_LI
    },
    {
        image: CNT_LII
    },
    {
        image: CNT_LIII
    },
    {
        image: CNT_LIV
    },
    {
        image: CNT_LV
    },
    {
        image: CNT_LVI
    },
    {
        image: CNT_LVII
    },
    {
        image: CNT_LVIII
    },
    {
        image: CNT_LIX
    },
    {
        image: CNT_LX
    },
    {
        image: CNT_LXI
    },
    {
        image: CNT_LXII
    },
    {
        image: CNT_LXIII
    },
    {
        image: CNT_LXIV
    },
    {
        image: CNT_LXV
    },
    {
        image: CNT_LXVI
    },
    {
        image: CNT_LXVII
    },
    {
        image: CNT_LXVIII
    },
    {
        image: CNT_LXIX
    },
    {
        image: CNT_LXX
    },
    {
        image: CNT_LXXI
    },
    {
        image: CNT_LXXII
    },
    {
        image: CNT_LXXIII
    },
    {
        image: CNT_LXXIV
    },
    {
        image: CNT_LXXV
    },
    {
        image: CNT_LXXVI
    },
    {
        image: CNT_LXXVII
    },
    {
        image: CNT_LXXVIII
    },
    {
        image: CNT_LXXIX
    },
    {
        image: CNT_LXXX
    },
    {
        image: CNT_LXXXI
    },
    {
        image: CNT_LXXXII
    },
    {
        image: CNT_LXXXIII
    },
    {
        image: CNT_LXXXIV
    },
    {
        image: CNT_LXXXV
    },
    {
        image: CNT_LXXXVI
    },
    {
        image: CNT_LXXXVII
    },
    {
        image: CNT_LXXXVIII
    },
    {
        image: CNT_LXXXIX
    },
    {
        image: CNT_XC
    },
    {
        image: CNT_XCI
    },
    {
        image: CNT_XCII
    },
    {
        image: CNT_XCIII
    },
    {
        image: CNT_XCIV
    },
    {
        image: CNT_XCV
    },
    {
        image: CNT_XCVI
    },
    {
        image: CNT_XCVII
    },
    {
        image: CNT_XCVIII
    },
    {
        image: CNT_XCIX
    },
    {
        image: CNT_C
    },

    {
        image: CNT_CI
    },

    {
        image: CNT_CII
    },

    {
        image: CNT_CIII
    },

    {
        image: CNT_CIV
    },

    {
        image: CNT_CV
    },

    {
        image: CNT_CVI
    },

    {
        image: CNT_CVII
    },

    {
        image: CNT_CVIII
    },

    {
        image: CNT_CIX
    },

    {
        image: CNT_CX
    },

]

export const SEC = [
    {
        image: SEC_I
    },
    {
        image: SEC_II
    },
    {
        image: SEC_III
    },
    {
        image: SEC_IV
    },
    {
        image: SEC_V
    },
]

export const LifeStyle = [
    {
        image: LST_I
    },
    {
        image: LST_II
    },
    {
        image: LST_III
    },
    {
        image: LST_IV
    },
    {
        image: LST_V
    },
    {
        image: LST_VI
    },
    {
        image: LST_VII
    },
    {
        image: LST_VIII
    },
    {
        image: LST_IX
    },
    {
        image: LST_X
    },
    {
        image: LST_XI
    },
    {
        image: LST_XII
    },
    {
        image: LST_XIII
    },
    {
        image: LST_XIV
    },
    {
        image: LST_XV
    },
    {
        image: LST_XVI
    },
    {
        image: LST_XVII
    },
    {
        image: LST_XVIII
    },
    {
        image: LST_XIX
    },
    {
        image: LST_XX
    },
    {
        image: LST_XXI
    },
    {
        image: LST_XXII
    },
    {
        image: LST_XXIII
    },
    {
        image: LST_XXIV
    },
    {
        image: LST_XXV
    },
    {
        image: LST_XXVI
    },
    {
        image: LST_XXVII
    },
    {
        image: LST_XXVIII
    },
    {
        image: LST_XXIX
    },
    {
        image: LST_XXX
    },
    {
        image: LST_XXXI
    },
    {
        image: LST_XXXII
    },
    {
        image: LST_XXXIII
    },
    {
        image: LST_XXXIV
    },
    {
        image: LST_XXXV
    },
    {
        image: LST_XXXVI
    },
    {
        image: LST_XXXVII
    },
    {
        image: LST_XXXVIII
    },
    {
        image: LST_XXXIX
    },
    {
        image: LST_XL
    },
    {
        image: LST_XLI
    },
    {
        image: LST_XLII
    },
    {
        image: LST_XLIII
    },
    {
        image: LST_XLIV
    },
    {
        image: LST_XLV
    },
    {
        image: LST_XLVI
    },
    {
        image: LST_XLVII
    },
    {
        image: LST_XLVIII
    },
    {
        image: LST_XLIX
    },
    {
        image: LST_L
    },
    {
        image: LST_LI
    },
    {
        image: LST_LII
    },
    {
        image: LST_LIII
    },
    {
        image: LST_LIV
    },
    {
        image: LST_LV
    },
    {
        image: LST_LVI
    },
    {
        image: LST_LVII
    },
    {
        image: LST_LVIII
    },
    {
        image: LST_LIX
    },
    {
        image: LST_LX
    },
    {
        image: LST_LXI
    },
    {
        image: LST_LXII
    },
    {
        image: LST_LXIII
    },
    {
        image: LST_LXIV
    },
    {
        image: LST_LXV
    },
    {
        image: LST_LXVI
    },
    {
        image: LST_LXVII
    },
    {
        image: LST_LXVIII
    },
    {
        image: LST_LXIX
    },
    {
        image: LST_LXX
    },
    {
        image: LST_LXXI
    },
    {
        image: LST_LXXII
    },
    {
        image: LST_LXXIII
    },
    {
        image: LST_LXXIV
    },
    {
        image: LST_LXXV
    },
    {
        image: LST_LXXVI
    },
    {
        image: LST_LXXVII
    },
    {
        image: LST_LXXVIII
    },
    {
        image: LST_LXXIX
    },
    {
        image: LST_LXXX
    },
    {
        image: LST_LXXXI
    },
    {
        image: LST_LXXXII
    },
    {
        image: LST_LXXXIII
    },
    {
        image: LST_LXXXIV
    },
    {
        image: LST_LXXXV
    },
    {
        image: LST_LXXXVI
    },
    {
        image: LST_LXXXVII
    },
    {
        image: LST_LXXXVIII
    },
    {
        image: LST_LXXXIX
    },
    {
        image: LST_XC
    },
    {
        image: LST_XCI
    },
    {
        image: LST_XCII
    },
    {
        image: LST_XCIII
    },
    {
        image: LST_XCIV
    },
    {
        image: LST_XCV
    },
    {
        image: LST_XCVI
    },
    {
        image: LST_XCVII
    },
    {
        image: LST_XCVIII
    },
    {
        image: LST_XCIX
    },
    {
        image: LST_C
    },
    {
        image: LST_CI
    },
    {
        image: LST_CII
    },
    {
        image: LST_CIII
    },
    {
        image: LST_CIV
    },
    {
        image: LST_CV
    },
    {
        image: LST_CVI
    },
    {
        image: LST_CVII
    },
    {
        image: LST_CVIII
    },
    {
        image: LST_CIX
    },
    {
        image: LST_CX
    },
    {
        image: LST_CXI
    },
    {
        image: LST_CXII
    },
    {
        image: LST_CXIII
    },
    {
        image: LST_CXIV
    },
    {
        image: LST_CXV
    },
    {
        image: LST_CXVI
    },
    {
        image: LST_CXVII
    },
    {
        image: LST_CXVIII
    },
    {
        image: LST_CXIX
    },
    {
        image: LST_CXX
    },
    {
        image: LST_CXXI
    },
    {
        image: LST_CXXII
    },
    {
        image: LST_CXXIII
    },
    {
        image: LST_CXXIV
    },
    {
        image: LST_CXXV
    },
    {
        image: LST_CXXVI
    },
    {
        image: LST_CXXVII
    },
    {
        image: LST_CXXVIII
    },
    {
        image: LST_CXXIX
    },
    {
        image: LST_CXXX
    },
    {
        image: LST_CXXXI
    },
    {
        image: LST_CXXXII
    },
    {
        image: LST_CXXXIII
    },
    {
        image: LST_CXXXIV
    },
    {
        image: LST_CXXXV
    },
    {
        image: LST_CXXXVI
    },
    {
        image: LST_CXXXVII
    },
    {
        image: LST_CXXXVIII
    },
    {
        image: LST_CXXXIX
    },
    {
        image: LST_CXXL
    },
    {
        image: LST_CXXLI
    },
    {
        image: LST_CXXLII
    },
    {
        image: LST_CXXLIII
    },
    {
        image: LST_CXXLIV
    },
    {
        image: LST_CXXLV
    },
    {
        image: LST_CXXLVI
    },
    {
        image: LST_CXXLVII
    },
    {
        image: LST_CXXLVIII
    },
    {
        image: LST_CXXLIX
    },
    {
        image: LST_CL
    },
    {
        image: LST_CLI
    },
    {
        image: LST_CLII
    },
    {
        image: LST_CLIII
    },
    {
        image: LST_CLIV
    },
    {
        image: LST_CLV
    },
    {
        image: LST_CLVI
    },
    {
        image: LST_CLVII
    },
    {
        image: LST_CLVIII
    },
    {
        image: LST_CLIX
    },
    {
        image: LST_CLX
    },
    {
        image: LST_CLXI
    },
    {
        image: LST_CLXII
    },
    {
        image: LST_CLXIII
    },
    {
        image: LST_CLXIV
    },
    {
        image: LST_CLXV
    },
    {
        image: LST_CLXVI
    },
    {
        image: LST_CLXVII
    },
    {
        image: LST_CLXVIII
    },
    {
        image: LST_CLXIX
    },
    {
        image: LST_CLXX
    },
    {
        image: LST_CLXXI
    },
    {
        image: LST_CLXXII
    },
    {
        image: LST_CLXXIII
    },
    {
        image: LST_CLXXIV
    },
    {
        image: LST_CLXXV
    },
    {
        image: LST_CLXXVI
    },
]

export const Outdoor = [
    {
        image: OUT_I
    },
    {
        image: OUT_II
    },
    {
        image: OUT_III
    },
    {
        image: OUT_IV
    },
    {
        image: OUT_V
    },
    {
        image: OUT_VI
    },
    {
        image: OUT_VII
    },
    {
        image: OUT_VIII
    },
    {
        image: OUT_IX
    },
    {
        image: OUT_X
    },
    {
        image: OUT_XI
    },
    {
        image: OUT_XII
    },
    {
        image: OUT_XIII
    },
    {
        image: OUT_XIV
    },
    {
        image: OUT_XV
    },
    {
        image: OUT_XVI
    },
    {
        image: OUT_XVII
    },
    {
        image: OUT_XVIII
    },
    {
        image: OUT_XIX
    },
    {
        image: OUT_XX
    },
    {
        image: OUT_XXI
    },
    {
        image: OUT_XXII
    },
    {
        image: OUT_XXIII
    },
    {
        image: OUT_XXIV
    },
    {
        image: OUT_XXV
    },
    {
        image: OUT_XXVI
    },
    {
        image: OUT_XXVII
    },
    {
        image: OUT_XXVIII
    },
    {
        image: OUT_XXIX
    },
    {
        image: OUT_XXX
    },
    {
        image: OUT_XXXI
    },
    {
        image: OUT_XXXII
    },
    {
        image: OUT_XXXIII
    },
    {
        image: OUT_XXXIV
    },
    {
        image: OUT_XXXV
    },
    {
        image: OUT_XXXVI
    },
    {
        image: OUT_XXXVII
    },
    {
        image: OUT_XXXVIII
    },
    {
        image: OUT_XXXIX
    },
    {
        image: OUT_XL
    },
    {
        image: OUT_XLI
    },
    {
        image: OUT_XLII
    },
    {
        image: OUT_XLIII
    },
    {
        image: OUT_XLIV
    },
    {
        image: OUT_XLV
    },
    {
        image: OUT_XLVI
    },
    {
        image: OUT_XLVII
    },
    {
        image: OUT_XLVIII
    },
    {
        image: OUT_XLIX
    },
    {
        image: OUT_L
    },
    {
        image: OUT_LI
    },
    {
        image: OUT_LII
    },
    {
        image: OUT_LIII
    },
    {
        image: OUT_LIV
    },
    {
        image: OUT_LV
    },
    {
        image: OUT_LVI
    },
    {
        image: OUT_LVII
    },
    {
        image: OUT_LVIII
    },
    {
        image: OUT_LIX
    },
    {
        image: OUT_LX
    },
    {
        image: OUT_LXI
    },
    {
        image: OUT_LXII
    },
    {
        image: OUT_LXIII
    },
]

export const Studio = [
    {
        image: STD_I
    },
    {
        image: STD_II
    },
    {
        image: STD_III
    },
    {
        image: STD_IV
    },
    {
        image: STD_V
    },
    {
        image: STD_VI
    },
    {
        image: STD_VII
    },
    {
        image: STD_VIII
    },
    {
        image: STD_IX
    },
    {
        image: STD_X
    },
    {
        image: STD_XI
    },
    {
        image: STD_XII
    },
    {
        image: STD_XIII
    },
    {
        image: STD_XIV
    },
    {
        image: STD_XV
    },
    {
        image: STD_XVI
    },
    {
        image: STD_XVII
    },
    {
        image: STD_XVIII
    },
    {
        image: STD_XIX
    },
    {
        image: STD_XX
    },
    {
        image: STD_XXI
    },
    {
        image: STD_XXII
    },
    {
        image: STD_XXIII
    },
    {
        image: STD_XXIV
    },
    {
        image: STD_XXV
    },
    {
        image: STD_XXVI
    },
    {
        image: STD_XXVII
    },
    {
        image: STD_XXVIII
    },
    {
        image: STD_XXIX
    },
    {
        image: STD_XXX
    },
    {
        image: STD_XXXI
    },
    {
        image: STD_XXXII
    },
    {
        image: STD_XXXIII
    },
    {
        image: STD_XXXIV
    },
    {
        image: STD_XXXV
    },
    {
        image: STD_XXXVI
    },
    {
        image: STD_XXXVII
    },
    {
        image: STD_XXXVIII
    },
    {
        image: STD_XXXIX
    },
    {
        image: STD_XL
    },
    {
        image: STD_XLI
    },
    {
        image: STD_XLII
    },
    {
        image: STD_XLIII
    },
    {
        image: STD_XLIV
    },
    {
        image: STD_XLV
    },
    {
        image: STD_XLVI
    },
    {
        image: STD_XLVII
    },
    {
        image: STD_XLVIII
    },
    {
        image: STD_XLIX
    },
    {
        image: STD_L
    },
    {
        image: STD_LI
    },
    {
        image: STD_LII
    },
    {
        image: STD_LIII
    },
    {
        image: STD_LIV
    },
    {
        image: STD_LV
    },
    {
        image: STD_LVI
    },
    {
        image: STD_LVII
    },
    {
        image: STD_LVIII
    },
    {
        image: STD_LIX
    },
    {
        image: STD_LX
    },
    {
        image: STD_LXI
    },
    {
        image: STD_LXII
    },
    {
        image: STD_LXIII
    },
    {
        image: STD_LXIV
    },
    {
        image: STD_LXV
    },
    {
        image: STD_LXVI
    },
    {
        image: STD_LXVII
    },
    {
        image: STD_LXVIII
    },
    {
        image: STD_LXIX
    },
    {
        image: STD_LXX
    },
    {
        image: STD_LXXI
    },
    {
        image: STD_LXXII
    },
    {
        image: STD_LXXIII
    },
    {
        image: STD_LXXIV
    },
    {
        image: STD_LXXV
    },
    {
        image: STD_LXXVI
    },
    {
        image: STD_LXXVII
    },
    {
        image: STD_LXXVIII
    },
    {
        image: STD_LXXIX
    },
    {
        image: STD_LXXX
    },
    {
        image: STD_LXXXI
    },
    {
        image: STD_LXXXII
    },
    {
        image: STD_LXXXIII
    },
    {
        image: STD_LXXXIV
    },
    {
        image: STD_LXXXV
    },
    {
        image: STD_LXXXVI
    }    
]

export const AllImages = [
    {
        image: BehindTheScene,
        count: 15,
        name: 'Behind The Scene'
    },
    {
        image: Brand,
        count: 24,
        name: 'Brand'
    },
    {
        image: Concert,
        count: 110,
        name: 'Concert'
    },
    {
        image: SEC,
        count: 110,
        name: 'SEC'
    },
    {
        image: LifeStyle,
        count: 176,
        name: 'Life Style'
    },
    {
        image: Outdoor,
        count: 63,
        name: 'Out Door'
    },
    {
        image: Studio,
        count: 86,
        name: 'Studio'
    }
]

export const Prices = [
    {
      name: 'Events',
      id: 'events',
      details: [
        {
          type: 'Basic',
          image: LST_XVIII,
          price: 178.6,
          detail: [
            {
              status: true,
              item: '6 Hour Shoot'
            },
            {
              status: true,
              item: 'Less than 120 Pictures'
            },
            {
              status: true,
              item: 'Minimal Picture edit (Max. 40)'
            },
            {
              status: true,
              item: 'Picture delivery via Google Photos'
            },
            {
              status: false,
              item: 'Rental'
            },
            {
              status: false,
              item: 'Logistics'
            },
            {
              status: false,
              item: 'Online Gallery'
            },
          ]
        },
        {
          type: 'Standard',
          image: LST_CXIV,
          price: 250,
          detail: [
            {
              status: true,
              item: 'More than 6 Hours Shoot'
            },
            {
              status: true,
              item: 'Less than 150 Pictures'
            },
            {
              status: true,
              item: 'Minimal Picture edit (Max. 80)'
            },
            {
              status: true,
              item: 'Picture delivery via Google Photos'
            },
            {
              status: false,
              item: 'Rental'
            },
            {
              status: true,
              item: 'Logistics'
            },
            {
              status: true,
              item: 'Online Gallery'
            },
          ]
        }
      ]
    },
    {
      name: 'Outfits',
      id: 'outfit',
      details: [
       
        {
          type: 'Double Outfit',
          image: OUT_I,
          price: 86,
          detail: [
            {
              status: true,
              item: '10 Edited Pictures'
            },
            {
              status: true,
              item: 'Max of 4 Poses'
            },
            {
              status: true,
              item: 'Two clothing choice'
            },
            {
              status: true,
              item: 'Rental'
            },
            {
              status: false,
              item: 'Logistics'
            },
            {
              status: false,
              item: 'Online Gallery'
            },
          ]
        },
        {
            type: 'Single Outfit',
            image: LST_CLXXVI,
            price: 56,
            detail: [
              {
                status: true,
                item: '5 Edited Pictures'
              },
              {
                status: true,
                item: 'Max of 4 Poses'
              },
              {
                status: true,
                item: 'A choice of clothing'
              },
              {
                status: false,
                item: 'Rental'
              },
              {
                status: false,
                item: 'Logistics'
              },
              {
                status: false,
                item: 'Online Gallery'
              },
            ]
          },
        {
          type: 'Triple Outfit',
          image: OUT_LII,
          price: 129,
          detail: [
            {
              status: true,
              item: '15 Edited Pictures'
            },
            {
              status: true,
              item: 'Max of 4 Poses'
            },
            {
              status: true,
              item: 'Three clothing choice'
            },
            {
              status: true,
              item: 'Rental'
            },
            {
              status: true,
              item: 'Logistics'
            },
            {
              status: false,
              item: 'Online Gallery'
            },
          ]
        },
      ]
    },
    {
      name: 'Home Service',
      id: 'home-service',
      details: [
        {
          type: 'Home',
          image: LST_XIV,
          price: 290,
          detail: [
            {
              status: true,
              item: 'Max 10 Hours Shoot'
            },
            {
              status: true,
              item: 'Tailored Shoot to your needs'
            },
            {
              status: true,
              item: 'Family Inclusive'
            },
            {
              status: true,
              item: '4 Outfits'
            },
            {
              status: false,
              item: 'Rental'
            },
            {
              status: false,
              item: 'Logistics'
            },
            {
              status: true,
              item: 'Online Gallery'
            },
          ]
        },
      ]
    },
]

export const Social = [
    {
        icon: faInstagram,
        link: 'https://www.instagram.com/photodean_/'
    },
    {
        icon: faXTwitter,
        link: 'https://twitter.com/photodean_'
    },
    {
        icon: faWhatsapp,
        link: 'https://api.whatsapp.com/message/A23FM6ZAOIQTF1?autoload=1&app_absent=0'
    },
]