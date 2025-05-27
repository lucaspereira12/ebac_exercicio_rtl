import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve ser inserido dois comentários', () => {
        render(<PostComment/>);

        // Inserção do primeiro comentário

        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Primeiro comentário adicionado através de teste'
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));

        // ----------------------------------------------------------------------

        // Inserção do segundo comentário

        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Segundo comentário adicionado através de teste'
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));

        // ----------------------------------------------------------------------

        expect(screen.getAllByTestId('comment')).toHaveLength(2);
    });
});