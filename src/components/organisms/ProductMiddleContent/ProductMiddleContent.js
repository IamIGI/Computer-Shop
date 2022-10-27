import ProductDescription from 'components/molecules/ProductDescription/ProductDescription';
import ProductMenu from 'components/molecules/ProductMenu/ProductMenu';
import SpecificationList from 'components/molecules/SpecificationList/SpecificationList';
import YouMayLike from 'components/molecules/YouMayLike/YouMayLike';
import {
    AboutProductSector,
    Description,
    MenuSector,
    Specification,
    YouMayLikeSector,
} from './ProductMIddleContent.style';

const ProductMiddleContent = ({ product }) => {
    return (
        <>
            <MenuSector>
                <ProductMenu numberOfOpinions={product.numberOfOpinions} />
            </MenuSector>
            <AboutProductSector>
                <Description id="Description">
                    <ProductDescription product={product} />
                </Description>
                <Specification id="Specification">
                    <SpecificationList product={product} />
                </Specification>
                <YouMayLikeSector>
                    <YouMayLike />
                </YouMayLikeSector>
            </AboutProductSector>
        </>
    );
};

export default ProductMiddleContent;
