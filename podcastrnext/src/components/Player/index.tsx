import styles from './styles.module.scss';

export function Player(){

    return(
        <div className={styles.playerContainer}>
            {/* Header da parte do player */}
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando Agora</strong>
            </header>

            {/* Conteúdo do Play */}
            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer>
                
            </footer>
        </div>
    );
} 