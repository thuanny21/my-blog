import React from 'react'
import links from "./content"
import * as S from './styled'

const MenuLinks = () => (
    <S.MenulinksWrapper>
        <S.MenuLinksLink>
            {links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink to={link.url} activeClassName="active">{link.label}</S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinksLink>
    </S.MenulinksWrapper>

)

export default MenuLinks