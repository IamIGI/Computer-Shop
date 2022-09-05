import { Separator } from 'components/atoms/Separator/Separator';
import ProductDescription from 'components/molecules/ProductDescription/ProductDescription';
import ProductMenu from 'components/molecules/ProductMenu/ProductMenu';
import SpecificationList from 'components/molecules/SpecificationList/SpecificationList';
import { AboutProductSector, Description, MenuSector, Specification } from './ProductMIddleContent.style';

const ProductMiddleContent = ({ product }) => {
    return (
        <>
            <MenuSector>
                <Separator />
                <ProductMenu numberOfOpinions={product.numberOfOpinions} />
            </MenuSector>
            <AboutProductSector>
                <Description id="Description">
                    <ProductDescription product={product} />
                </Description>
                <Specification id="Specification">
                    <SpecificationList product={product} />
                </Specification>
            </AboutProductSector>
        </>
    );
};

export default ProductMiddleContent;
