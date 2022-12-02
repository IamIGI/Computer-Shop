import formatPrices from 'helpers/formatPrices';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { ChangeRecipient, DeleteRecipient, TemplateContainer, TemplateWrapper } from './RecipientTemplates.style';

const RecipientTemplates = ({ showOptions = false, recipientTemplates, handlePreloadValues, handleDelete }) => {
    return (
        <TemplateWrapper>
            {recipientTemplates.map((template) => (
                <TemplateContainer>
                    <ul>
                        <li>{template.name}</li>
                        <li>{template.email}</li>
                        <li>{formatPrices(template.phone)}</li>
                        <li>{template.place}</li>
                        <li>{template.street}</li>
                        <li>{template.zipCode}</li>
                    </ul>

                    <ChangeRecipient onClick={() => handlePreloadValues(template)}>
                        {showOptions ? 'Zmień' : 'Użyj'}
                    </ChangeRecipient>
                    {showOptions && (
                        <DeleteRecipient onClick={() => handleDelete(template._id)}>
                            <MdOutlineDeleteOutline />
                        </DeleteRecipient>
                    )}
                </TemplateContainer>
            ))}
        </TemplateWrapper>
    );
};

export default RecipientTemplates;
