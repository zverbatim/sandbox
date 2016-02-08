package bookmarks;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

/**
 * roughly the query:
 * select a from Account a where a.username = :username
 */
public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByUsername(String username);
}