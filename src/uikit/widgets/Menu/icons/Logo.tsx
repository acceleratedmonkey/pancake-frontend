import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

interface LogoProps extends SvgProps {
  isDark: boolean
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? '#FFFFFF' : '#000000'
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <path
        d="M0 5000 l0 -5000 5000 0 5000 0 0 5000 0 5000 -5000 0 -5000 0 0
-5000z m4331 1391 c241 -76 356 -342 244 -567 -100 -203 -332 -283 -540 -185
-159 74 -257 259 -226 426 21 115 97 230 188 286 93 58 225 73 334 40z m1795
3 c63 -30 64 -38 64 -396 0 -354 0 -352 -60 -383 -24 -12 -85 -15 -348 -15
-436 0 -402 -33 -402 400 0 334 3 354 62 390 31 19 50 20 341 20 265 0 314 -2
343 -16z m-807 -1205 c85 -52 94 -90 89 -409 -3 -279 -9 -300 -81 -348 l-40
-27 -282 -5 -282 -5 -35 -27 c-65 -50 -68 -64 -68 -365 0 -295 -6 -324 -65
-371 -50 -39 -87 -43 -366 -40 l-266 3 -40 27 c-77 51 -73 12 -73 786 l0 689
23 34 c12 18 38 44 56 56 l34 23 681 0 c672 0 681 0 715 -21z"
      />
    </Svg>
  )
}

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
